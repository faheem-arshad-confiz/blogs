# BlogJS


## Description

BlogJS is a simple blog application built with AngularJS, Node.js and MongoDB. Creates your article and shares them in a beautiful minimalistic template.


## Dependencies
You need `node v18.15.0`

You need `yarn`

You need `Angular 15`

You need `redis-2.8.9` up and running on port `6379`

You need `mongodb-2.4.10` up and running on port `27017`

## Installation

Clone the repository with: `https://github.com/faheem-arshad-confiz/blogs.git`

### Start Redis

Start your redis instance:
```bash
/var/www/angular/blogjs$ redis-server 
                _._                                                  
           _.-``__ ''-._                                             
      _.-``    `.  `_.  ''-._           Redis 2.8.9 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._                                   
 (    '      ,       .-`  | `,    )     Running in stand alone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 13499
  `-._    `-._  `-./  _.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |           http://redis.io        
  `-._    `-._`-.__.-'_.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |                                  
  `-._    `-._`-.__.-'_.-'    _.-'                                   
      `-._    `-.__.-'    _.-'                                       
          `-._        _.-'                                           
              `-.__.-'                                               

[13499] 12 May 19:22:41.172 # Server started, Redis version 2.8.9
[13499] 12 May 19:22:41.172 * The server is now ready to accept connections on port 6379
```

### Build angularjs app

install gulp and the gulp dependencies: `yarn install`

Build Angularjs app `yarn workspace blog-app run build`

### Install Nodejs App

Run the application: `yarn workspace blog run start`

## Run

You can now open your browser: `http://localhost:3000/#!/`

Create a first account on `http://localhost:3000/#!/admin/register`

To access the Administration, go to `http://localhost:3000/#!/admin/login`

## Stack

* AngularJS
* Angular15
* Bootstrap
* MongoDB
* Redis
* Node.js

## Licence
The MIT License (MIT)

