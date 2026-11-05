FROM gcr.io/distroless/nodejs24-debian13

WORKDIR /usr/src/app

COPY build/ build/

WORKDIR /usr/src/app/server
COPY server/ .

EXPOSE 3000
CMD ["server.js"]
