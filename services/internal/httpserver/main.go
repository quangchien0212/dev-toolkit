package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"

	"common/logs"
	"common/server"
)

func main() {
	logs.Init()

	// ctx := context.Background()
	// client, err := firestore.NewClient(ctx, "dev-toolkit")

	// if err != nil {
	// 	panic(err)
	// }

	// defer client.Close()

	port := os.Getenv("HTTP_PORT")

	server.RunHTTPServer(func(r chi.Router) http.Handler {
		r.Get("/", server.GetHealthCheck)
		return r
	}, port)
	fmt.Println("Starting server")
}
