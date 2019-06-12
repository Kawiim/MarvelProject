# MarvelProject (aka PokemonProject)
> It was suppose to be a web app about Marvel characters, but as the API seems to be down, let me introduce you to the Pokemon Universe
> Estimated time : 8 hours (more or less)
```sh
❯ git clone https://github.com/Kawiim/MarvelProject.git
❯ cd MarvelProject
```
## Docker ? Docker.

Trying to use docker on a Windows (10, Home) machine is a battle. Docker Toolbox seems to be really limitating, so I decided to mount an VM machine. I created the dockerfile files, so if you want to run the server and client in different container, you can run the following commands to build and run the client :

```sh
❯ docker build -t pokemon-app-client .
```
and the server :
```sh
❯ docker build -t pokemon-app-server .
```
or use the docker-compose command : 
```sh
❯ docker-compose up
```


## Server-side with Node.js
You need to have a MongoDB server running on default port 27017

If you prefere doing the whole process manualy, you can run the following commands in the server repository : 
```sh
❯ npm install
```

Then to run the server : 
```sh
❯ node server
```

## Pokemon data from PokéAPI

I decided to base this application on the REST API from PokéAPI : https://pokeapi.co/docs/v2.html#pokemon

It allows you to retrieve a lot of different information about this universe such as name, height, or pokemon picture. I retrieve all those data on the server start and save them into a MongoDB database called "pokemons". 

All the previous data are exposed by an express server on port 6969 allowing the React application to access them by using the following routes :

> http://localhost:6969/pokemons

## Client-side with React

Then to run the React app : 
```sh
❯ cd client
❯ yarn start
```
The app is now available at http://localhost:3000/
You can navigate through the pages using the pagination links in the bottom. Only 5 pokemons are displayed at a time so don't hesitate to use it !


