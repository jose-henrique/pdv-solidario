class Promotion < ApplicationRecord
    has_many :products, class_name: "Product"
    has_many :orders, class_name: "Order"
    has_many :promotion_payments, class_name: "PromotionPaymentMethod"

    validates :name, presence: true
    validates :promotion_type, inclusion: { in: [ 1, 2 ] }
    validates :total_amount, numericality: { greather_than: 0 }, on: :update
end
