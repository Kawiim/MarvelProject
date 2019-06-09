FROM node:12.4.0-alpine

RUN mkdir -p /srv/app/pokemon-app-server

WORKDIR /srv/app/pokemon-app-server

COPY package*.json /srv/app/pokemon-app-server/

RUN npm install

COPY . /srv/app/pokemon-app-server/

EXPOSE 6969

CMD [ "node", "server" ]