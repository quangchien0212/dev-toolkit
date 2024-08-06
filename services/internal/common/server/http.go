package server

import (
	"net/http"
	"os"
	"strings"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/sirupsen/logrus"
)

func RunHTTPServer(createHandler func(router chi.Router) http.Handler, port string) {
	RunHTTPServerOnAddr(":"+port, createHandler)
}

func RunHTTPServerOnAddr(addr string, createHandler func(router chi.Router) http.Handler) {
	apiRouter := chi.NewRouter()
	setMiddlewares(apiRouter)
	setCORS(apiRouter)

	rootRouter := chi.NewRouter()
	// we are mounting all APIs under /api path
	rootRouter.Mount("/", createHandler(apiRouter))

	logrus.Info("Starting HTTP server on ", addr)

	err := http.ListenAndServe(addr, rootRouter)
	if err != nil {
		logrus.WithError(err).Panic("Unable to start HTTP server")
	}
}

func setMiddlewares(router *chi.Mux) {
	router.Use(middleware.NoCache)
	router.Use(middleware.Logger)
}

func setCORS(r *chi.Mux) {
	origins := strings.Split(os.Getenv("CORS_ORIGIN"), ",")

	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: origins,
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))
}

func GetHealthCheck(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("OK"))
}
