class PromotionsController < ApplicationController
  def index
    promotions = Promotion.all.order(created_at: :asc)
    render inertia: "Promotions/Index", props: {
      promotions: promotions.as_json
    }
  end

  def new
  end
end
