class PromotionsController < ApplicationController
  def index
    promotions = Promotion.all.order(created_at: :asc)
    render inertia: "Promotions/Index", props: {
      promotions: promotions.as_json
    }
  end

  def new
    payment_methods = PaymentMethod.all

    render inertia: "Promotions/New", props: {
      paymentMethods: payment_methods.as_json
    }
  end
end
