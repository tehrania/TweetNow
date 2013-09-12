get '/' do
  # Look in app/views/index.erb
  erb :index
end


post '/' do
p "****************"
p params
Twitter.update(params[:tweet])
sleep 2
erb :index
end
