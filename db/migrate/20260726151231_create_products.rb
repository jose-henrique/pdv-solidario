class CreateProducts < ActiveRecord::Migration[8.1]
  def change
    create_table :products do |t|
      t.belongs_to :product_category
      t.belongs_to :promotion
      t.string :name
      t.string :description
      t.decimal :price, precision: 13, scale: 2

      t.timestamps
    end
  end
end
