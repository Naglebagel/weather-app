class UserController < AppController

	post '/' do 
		@user = User.new
		@user.username = params[:username]
		@user.password = params[:password]
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