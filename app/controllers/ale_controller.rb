# controller for ale house
class AleController < ApplicationController
  layout 'ale'

  def index
    @ale_house_props = { ales: Ale.all }
  end

  def show
    @ale_house_props = { ale: Ale.find(params[:id]) }
  end
end
