FROM node:alpine as DependencyBuilder

RUN \
    apk add --no-cache python make g++ && \
    apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
    rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli

FROM DependencyBuilder as ApplicationInstaller

WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .

RUN yarn install && yarn cache clean

FROM ApplicationInstaller as Application

COPY . .

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230