class MeasuresController < ApplicationController
  def index
    @measure = CSV.read("./public/room_8a.csv", headers: true)
  end
end
