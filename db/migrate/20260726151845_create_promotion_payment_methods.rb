class CreatePromotionPaymentMethods < ActiveRecord::Migration[8.1]
  def change
    create_table :promotion_payment_methods do |t|
      t.belongs_to :promotion
      t.belongs_to :payment_method
      t.string :pix_key

      t.timestamps
    end
  end
end
