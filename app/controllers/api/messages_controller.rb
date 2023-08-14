class Api::MessagesController < ApplicationController

  # GET http://localhost/api/messages
  def index
    # @random_message = Message.all.sample
    count = Message.count
    random_offset = rand(count)
    @random_message = Message.offset(random_offset).first


    if @random_message
      render json: @random_message.to_json(only: [:id, :text]), status: :ok
    else
      render json: { status: 'Error', errors: @random_message.errors }
    end
  end
end