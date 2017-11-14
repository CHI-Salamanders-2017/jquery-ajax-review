get '/things' do
  content_type :json
  Thing.all.to_json
end

get '/things/new' do
  erb :"things/new"
end

post '/things' do
  @thing = Thing.new(params[:thing])

  if @thing.save
    redirect '/'
  else
    @errors = @thing.errors.full_messages
    erb :"things/new"
  end
end
