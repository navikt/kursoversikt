#!/usr/bin/env sh

if test -d /var/run/secrets/;
then
    for FILE in /var/run/secrets/
    do
        for line in $(cat $FILE); do
            echo "- exporting `echo $line | cut -d '=' -f 1`"
            export $line
        done
    done
fi

exec node src/server/server.js
