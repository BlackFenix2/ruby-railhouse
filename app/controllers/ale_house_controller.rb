# frozen_string_literal: true

class AleHouseController < ApplicationController
  layout "ale_house"

  def index
    @ale_house_props = { name: "Stranger" }
  end
end
