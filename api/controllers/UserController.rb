class UserController < AppController

	options "*" do
    	response.headers["Access-Control-Allow-Methods"] = "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"
	end

	get '/' do
		# response['Access-Control-Allow-Origin'] = '*'
		@user = User.all
		@user.to_json
	end

	post '/' do 
		payload = params 
    	payload = JSON.parse(request.body.read).symbolize_keys
		@user = User.new
		@user.username = payload[:username]
		@user.password = payload[:password]
		@user.save

		@user.to_json
	end

	post '/login' do

		@password = params[:password]
		@user = User.find_by(username: params[:username])

		if @user && @user.authenticate(@password)
			'hey your logged in'
		end
	end
end