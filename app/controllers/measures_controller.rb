class MeasuresController < ApplicationController
  def extract_data
    @measure_room_8a = CSV.parse(File.read("./public/room_8a.csv"), headers: true)
    @measure_room_8f = CSV.read("./public/room_8f.csv", headers: true)
    i = 0
    @data_keys_co2 = []
    @data_co2 = []
    @data_hum = []
    @data_tmp = []
    @data_voct = []

    @data = @measure_room_8a['measure_type'].each do |tab|
      case tab
      when 'CO2'
        @data_keys_co2 << @measure_room_8a['@timestamp'][i].to_datetime.to_i
        @data_co2 << @measure_room_8a['measure_float'][i]
      when 'HUM'
        @data_hum << @measure_room_8a['measure_float'][i]
      when 'TMP'
        @data_tmp << @measure_room_8a['measure_float'][i]
      when 'VOCT'
        @data_voct << @measure_room_8a['measure_float'][i]
      end
      i += 1
    end
  end
end
