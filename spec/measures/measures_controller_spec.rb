require "rails_helper"

RSpec.describe MeasuresController, type: :controller do
  describe 'index' do
    let(:extract_data) { get :extract_data }
    let(:data) { CSV.parse(File.read("./public/room_8a.csv"), headers: true) }

    it 'returns 200' do
      expect(extract_data).to have_http_status(:ok)
    end

    it 'returns measure_float' do
      expect(data['measure_float'][0]).to eq('384')
    end
  end
end
