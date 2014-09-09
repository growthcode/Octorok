get '/' do
  erb :index
end

get '/users' do
end

post '/users' do

end

get '/users/new' do
  erb :sign_up
end

get '/users/sign_in' do
  erb :sign_in
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
