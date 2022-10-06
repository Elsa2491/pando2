class MeasuresController < ApplicationController
  def extract_data
    @measure_room_8a = CSV.parse(File.read("./public/room_8a.csv"), headers: true)
    @measure_room_8f = CSV.parse(File.read("./public/room_8f.csv"), headers: true)
    @measure_room_b2 = CSV.parse(File.read("./public/room_b2.csv"), headers: true)

    i = 0
    @data_keys_room_8a = []
    @data_co2_room_8a  = []
    @data_hum_room_8a  = []
    @data_tmp_room_8a  = []
    @data_voct_room_8a = []

    @measure_room_8a['measure_type'].each do |tab|
      @data_keys_room_8a << @measure_room_8a['@timestamp'][i].to_datetime.to_i
      case tab
      when 'CO2'
        @data_co2_room_8a << @measure_room_8a['measure_float'][i]
      when 'HUM'
        @data_hum_room_8a << @measure_room_8a['measure_float'][i]
      when 'TMP'
        @data_tmp_room_8a << @measure_room_8a['measure_float'][i]
      when 'VOCT'
        @data_voct_room_8a << @measure_room_8a['measure_float'][i]
      end
      i += 1
    end

    x = 0
    @data_keys_room_8f = []
    @data_co2_room_8f = []
    @data_hum_room_8f = []
    @data_tmp_room_8f = []
    @data_voct_room_8f = []

    @measure_room_8f['measure_type'].each do |tab|
      @data_keys_room_8f << @measure_room_8f['@timestamp'][x].to_datetime.to_i
      case tab
      when 'CO2'
        @data_co2_room_8f << @measure_room_8f['measure_float'][x]
      when 'HUM'
        @data_hum_room_8f << @measure_room_8f['measure_float'][x]
      when 'TMP'
        @data_tmp_room_8f << @measure_room_8f['measure_float'][x]
      when 'VOCT'
        @data_voct_room_8f << @measure_room_8f['measure_float'][x]
      end
      x += 1
    end

    y = 0
    @data_keys_room_b2 = []
    @data_co2_room_b2 = []
    @data_hum_room_b2 = []
    @data_tmp_room_b2 = []
    @data_voct_room_b2 = []

    @measure_room_b2['measure_type'].each do |tab|
      @data_keys_room_b2 << @measure_room_b2['@timestamp'][y].to_datetime.to_i
      case tab
      when 'CO2'
        @data_co2_room_b2 << @measure_room_b2['measure_float'][y]
      when 'HUM'
        @data_hum_room_b2 << @measure_room_b2['measure_float'][y]
      when 'TMP'
        @data_tmp_room_b2 << @measure_room_b2['measure_float'][y]
      when 'VOCT'
        @data_voct_room_b2 << @measure_room_b2['measure_float'][y]
      end
      y += 1
    end
  end
end
