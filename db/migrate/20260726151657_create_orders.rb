class CreateOrders < ActiveRecord::Migration[8.1]
  def change
    create_table :orders do |t|
      t.belongs_to :promotion
      t.belongs_to :promotion_payment_method
      t.string :customer_name
      t.integer :status
      t.decimal :total_amout, precision: 13, scale: 2

      t.timestamps
    end
  end
end
