class PromotionPaymentMethod < ApplicationRecord
    belongs_to :payment_method, class_name: "PaymentMethod", foreign_key: :payment_method_id
    belongs_to :promotion, class_name: "Promotion", foreign_key: :promotion_id

    validates :payment_method_id, :promotion_id, presence: true
end
