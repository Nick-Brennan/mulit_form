require 'sinatra'

get '/' do
  File.read(File.join('public', 'index.html'))
end

get '/success' do
  File.read(File.join('public', 'success.html'))
end

post '/' do
  p "*" * 50
  p "root route"
  p params["email"]
  p "*" * 50
end

post '/second' do
  p "*" * 50
  p "second route"
  p params["color"]
  p "*" * 50
end