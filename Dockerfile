FROM gcr.io/distroless/nodejs20-debian11

WORKDIR /usr/src/app

COPY build/ build/

WORKDIR /usr/src/app/server
COPY server/ .

EXPOSE 3000
CMD ["server.js"]
