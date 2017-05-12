class Api::SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if user
      login_user!(user)
      render json: user.username
    else
      render json: 'invalid credentials', status: 422
      render :new
    end
  end

  def destroy
    if logged_in?
      log_out!
      render json: {}
    else
      render json: 'not logged in', status: 404
    end
  end
end
