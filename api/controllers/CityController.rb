class CityController < AppController

	get '/' do
		@city = City.all
		@city.to_json
		'this is city get'
	end

	post '/create' do
		'posted'
	end






end