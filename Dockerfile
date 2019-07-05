FROM node:alpine as builder

WORKDIR /app
RUN yarn add http-proxy-middleware fs-extra mustache-express jsdom promise


FROM navikt/node-express:1.0.0
WORKDIR /app

COPY build/ build/
COPY src/server/ src/server/
COPY start.sh ./
COPY --from=builder /app/node_modules /app/node_modules


EXPOSE 3000
ENTRYPOINT ["node", "src/server/server.js"]
