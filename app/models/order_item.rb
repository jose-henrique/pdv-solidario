class OrderItem < ApplicationRecord
    belongs_to :order, class_name: "Order", foreign_key: :order_id
    belongs_to :product, class_name: "Product", foreign_key: :product_id
    belongs_to :product_variant, class_name: "ProductVariant", foreign_key: :product_variant_id

    validates :order_id, :product_id, :product_variant_id, :quantity, presence: true
end
