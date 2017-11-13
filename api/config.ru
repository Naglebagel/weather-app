require 'sinatra/base'

require './controllers/AppController'
require './controllers/CityController'
require './controllers/UserController'

require './models/CityModel'
require './models/UserModel'

map('/') {run AppController}
map('/citys') {run CityController}
map('/users') {run UserController}