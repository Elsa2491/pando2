require "rails_helper"

RSpec.describe MeasuresController, type: :controller do
  describe 'index' do
    let(:data) { get :index }

    it 'returns 200' do
      expect(data).to have_http_status(:ok)
    end
  end
end
