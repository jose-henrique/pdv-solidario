class Order < ApplicationRecord
    belongs_to :promotion, class_name: "Promotion", foreign_key: :promotion_id
    belongs_to :payment, class_name: "PromotionPaymentMethod", foreign_key: :promotion_payment_method_id

    has_many :items, class_name: "OrderItem"

    validates :promotion_id, :promotion_payment_method_id, presence: true
    validates :status, inclusion: { in: [ 1, 2, 3 ] }
end
