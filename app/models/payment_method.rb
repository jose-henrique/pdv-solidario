class PaymentMethod < ApplicationRecord
    has_many :payment_promotions, class_name: "PromotionPaymentMethod"
end
