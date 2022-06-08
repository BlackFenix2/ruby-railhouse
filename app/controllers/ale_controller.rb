# controller for ale house
class AleController < ApplicationController
  layout 'ale'

  def index
    @ale_house_props = { ales: Ale.all }
  end

  def show
    @ale_house_props = { ale: Ale.find(params[:id]), token: form_authenticity_token }
  end

  def new
    @ale_house_props = { ale: Ale.new, token: form_authenticity_token }
  end

  def create
    @ale = Ale.new(ale_params)
    if @ale.save
      redirect_to @ale
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @ale_house_props = { ale: Ale.find(params[:id]), token: form_authenticity_token }
  end

  def destroy
    @ale = Ale.find(params[:id])
    @ale.destroy

    redirect_to root_path, status: :see_other
  end

  def update
    @ale = Ale.find(params[:id])

    if @ale.update(ale_params)
      redirect_to @ale
    else
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def ale_params
    params.permit(:title, :description, :price, :imageUrl)
  end
end
