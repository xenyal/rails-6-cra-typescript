class Api::V1::StaticController < ApplicationController
  def index
    render json: { users: ['John', 'Kate', 'Harry', 'Mary'] }
  end
end
