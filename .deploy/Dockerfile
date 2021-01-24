FROM alpine:3.12.3

RUN apk add --update npm
RUN apk add --update aws-cli


COPY docker-commands.sh /scripts/docker-commands.sh
RUN ["chmod", "+x", "/scripts/docker-commands.sh"]

COPY src /code/src
COPY cdk.json /code/cdk.json
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
COPY tsconfig.json /code/tsconfig.json
COPY multipurpose-api.zip /code/multipurpose-api.zip

ENTRYPOINT ["/scripts/docker-commands.sh"]
