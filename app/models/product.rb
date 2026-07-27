class Product < ApplicationRecord
    belongs_to :category, class_name: "ProductCategory", foreign_key: :product_category_id
    belongs_to :promotion, class_name: "Promotion", foreign_key: :promotion_id

    has_many :variants, class_name: "ProductVariant"
    has_many :order_items, class_name: "OrderItem"

    validates :product_category_id, :promotion_id, :name, :price, presence: true
end
