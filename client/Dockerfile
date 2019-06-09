FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/pokemon-app-client

WORKDIR /srv/app/pokemon-app-client

COPY package*.json /srv/app/pokemon-app-client

RUN npm install

COPY . /srv/app/pokemon-app-client

EXPOSE 3000

CMD [ "yarn", "start" ]