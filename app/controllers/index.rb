get '/' do
  erb :index
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

get '/dodgingIan' do
  erb :dodgeIan
end
