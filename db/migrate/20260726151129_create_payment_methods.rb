class CreatePaymentMethods < ActiveRecord::Migration[8.1]
  def change
    create_table :payment_methods do |t|
      t.string :name
      t.boolean :pix_key_required, default: false

      t.timestamps
    end
  end
end
