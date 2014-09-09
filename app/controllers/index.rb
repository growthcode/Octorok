get '/' do
  erb :index
end

get '/users' do
end

post '/users' do
  @user=User.create(first_name: params[:first_name],
                    last_name: params[:last_name],
                    username: params[:username],
                    email: params[:email],
                    password_hash: params[:password_hash])
  redirect '/'
end

get '/users/new' do
  erb :sign_up
end

get '/users/sign_in' do
  erb :sign_in
end

post '/users/sign_in' do
  user=User.find_by_email(params[:email])
  redirect '/'
end

get '/frogger_1' do
  erb :frogger_1, layout: false
end

get '/frogger_2' do
  erb :frogger_2
end

get '/battles' do
  erb :battles
end

get '/dodge_ian' do
  erb :dodgeIan
end
