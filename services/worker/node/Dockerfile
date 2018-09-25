FROM node:carbon

WORKDIR /usr/src/app

COPY ./services/worker/node/package.json ./

RUN npm install -g nodemon --no-optional

COPY ./services/worker/node/ ./

RUN npm install

