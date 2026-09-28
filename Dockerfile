FROM golang:1.26-bookworm AS build
WORKDIR /src
COPY src/amqp-go/go.mod src/amqp-go/go.sum ./
RUN go mod download
COPY src/amqp-go/ ./
RUN CGO_ENABLED=0 go build -ldflags "-s -w" -o /out/amqp-server ./cmd/amqp-server

FROM debian:bookworm-slim
RUN apt-get update \
	&& apt-get install -y --no-install-recommends ca-certificates \
	&& rm -rf /var/lib/apt/lists/*
COPY --from=build /out/amqp-server /usr/local/bin/amqp-server
# Generate the binary's own defaults, then point durable storage at the volume.
# AMQP_* environment variables override this file (AMQP_STORAGE_PATH, AMQP_NETWORK_PORT, ...).
RUN mkdir -p /etc/hardhatq /data \
	&& amqp-server --generate-config /etc/hardhatq/config.yaml \
	&& sed -i 's#^\([[:space:]]*path:[[:space:]]*\).*#\1/data#' /etc/hardhatq/config.yaml
WORKDIR /data
VOLUME /data
EXPOSE 5672
ENTRYPOINT ["amqp-server"]
CMD ["--config", "/etc/hardhatq/config.yaml"]
