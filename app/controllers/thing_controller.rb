get '/things' do
  content_type :json
  Thing.all.to_json
end

get '/things/new' do
  erb :"things/new"
end

post '/things' do
  @thing = Thing.new(params[:thing])

  if request.xhr?
    if @thing.save
      content_type :json
      @thing.to_json
    else
      status 422
      @thing.errors.full_messages.to_json
    end
  else
    if @thing.save
      redirect '/'
    else
      @errors = @thing.errors.full_messages
      erb :"things/new"
    end
  end
end
