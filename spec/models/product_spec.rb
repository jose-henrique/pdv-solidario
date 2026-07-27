require "rails_helper"

RSpec.describe 'Product', type: :model do
  describe "creation" do
    context "with valid attributes" do
      it "create a new product on database" do
        expect {
          Product.create!(
            product_category_id: 1,
            promotion_id: 1,
            name: "Test",
            description: "Lorem Ipsum Dolor Sit Amet",
            price: 12.22
          )
      }.to change(Product, :count).by(1)
      end

      it "create a new product on database without description" do
        expect {
          Product.create!(
            product_category_id: 1,
            promotion_id: 1,
            name: "Test",
            price: 12.22
          )
      }.to change(Product, :count).by(1)
      end
    end

    context "with invalid attributes" do
      it "create without promotion" do
        product = Product.new(product_category_id: 1, name: "Test", description: "Lorem Ipsum Dolor Sit Amet", price: 12.22)

        expect(product).not_to be_valid
        expect(product.errors[:promotion_id]).to include("can't be blank")
      end

      it "create without category" do
        product = Product.new(promotion_id: 1, name: "Test", description: "Lorem Ipsum Dolor Sit Amet", price: 12.22)

        expect(product).not_to be_valid
        expect(product.errors[:product_category_id]).to include("can't be blank")
      end

      it "create without name" do
        product = Product.new(product_category_id: 1, promotion_id: 1, description: "Lorem Ipsum Dolor Sit Amet", price: 12.22)

        expect(product).not_to be_valid
        expect(product.errors[:name]).to include("can't be blank")
      end

      it "create without price" do
        product = Product.new(product_category_id: 1, promotion_id: 1, name: "Test", description: "Lorem Ipsum Dolor Sit Amet")

        expect(product).not_to be_valid
        expect(product.errors[:price]).to include("can't be blank")
      end
    end
  end
end
