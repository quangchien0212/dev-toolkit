FROM golang:1.22.1

RUN chttpserver
RUN go install github.com/cespare/reflex@latest
COPY reflex.conf /

COPY start.sh /
RUN chmod +x /start.sh

ENTRYPOINT ["reflex", "-c", "/reflex.conf"]