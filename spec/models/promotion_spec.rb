require "rails_helper"
RSpec.describe 'Promotion', type: :model do
  describe 'creation' do
  context 'with valid attributes' do
    it 'create a new promotion on database' do
      expect {
        Promotion.create!(
            name: "Promotion test",
            promotion_type: 1,
            active: 1
        )
    }.to change(Promotion, :count).by(1)
    end
end
   context 'with invalid attrbutes' do
       it 'is invalid with promotion type wrong' do
           promotion = Promotion.new(name: "Promotion test", promotion_type: 4, active: 1)

           expect(promotion).not_to be_valid
           expect(promotion.errors[:promotion_type]).to include("is not included in the list")
       end

       it 'is invalid without name' do
           promotion = Promotion.new(promotion_type: 2, active: 1)

           expect(promotion).not_to be_valid
           expect(promotion.errors[:name]).to include("can't be blank")
       end
   end
  end
end
