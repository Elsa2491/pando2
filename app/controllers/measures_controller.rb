class MeasuresController < ApplicationController
  def index
    room_8a = "./public/room_8a.csv"
    # @measure = CSV.read("./public/room_8a.csv", headers: true)
    # @measure_room_8a = CSV.read(room_8a, headers: true)
    @measure_room_8a = CSV.parse(File.read("./public/room_8a.csv"), headers: true)
    @measure_room_8f = CSV.read("./public/room_8f.csv", headers: true)
    @data_keys = @measure_room_8a.headers
    # binding.pry
    @data_values = [0, 10, 5, 2, 20, 30, 45]
    # @data_values = [@measure_room_8a, @measure_room_8f]
  end
end
