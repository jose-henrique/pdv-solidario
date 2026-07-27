class ProductVariant < ApplicationRecord
    belongs_to :product, class_name: "Product", foreign_key: :product_id

    has_many :order_items, class_name: "OrderItem"

    vlaidates :product_id, :name, :default_selection, presence: true
    validates :select_type, inclusion: { in: [ 1, 2 ] }
end
