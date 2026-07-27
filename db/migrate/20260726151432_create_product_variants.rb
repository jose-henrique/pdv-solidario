class CreateProductVariants < ActiveRecord::Migration[8.1]
  def change
    create_table :product_variants do |t|
      t.belongs_to :product
      t.string :name
      t.integer :select_type
      t.boolean :default_selection

      t.timestamps
    end
  end
end
