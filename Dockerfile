FROM navikt/node-express:12.2.0-alpine

WORKDIR /usr/src/app

COPY build/ build/

WORKDIR /usr/src/app/server
COPY server/ .

RUN npm ci

EXPOSE 3000
ENTRYPOINT ["/bin/sh", "start.sh"]