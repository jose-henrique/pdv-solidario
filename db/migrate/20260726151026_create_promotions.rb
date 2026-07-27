class CreatePromotions < ActiveRecord::Migration[8.1]
  def change
    create_table :promotions do |t|
      t.string :name
      t.integer :promotion_type
      t.boolean :active

      t.timestamps
    end
  end
end
