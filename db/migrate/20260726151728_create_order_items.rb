class CreateOrderItems < ActiveRecord::Migration[8.1]
  def change
    create_table :order_items do |t|
      t.belongs_to :order
      t.belongs_to :product
      t.belongs_to :product_variant
      t.integer :quantity

      t.timestamps
    end
  end
end
