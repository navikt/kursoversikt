FROM navikt/node-express:16

WORKDIR /usr/src/app

COPY build/ build/

WORKDIR /usr/src/app/server
COPY server/ .

RUN npm ci

EXPOSE 3000
ENTRYPOINT ["/bin/sh", "start.sh"]