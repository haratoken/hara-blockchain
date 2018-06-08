FROM node:9-alpine
MAINTAINER Juwita Winadwiastuti <juwita.winadwiastuti@hara.ag>
RUN apk update && \
    apk add --update bash git python make g++ && \
    rm -rf /var/cache/apk/*
RUN mkdir /home/blockchain
WORKDIR /home/blockchain
COPY . . 
RUN npm install