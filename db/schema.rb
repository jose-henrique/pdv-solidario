# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_07_26_151845) do
  create_table "order_items", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.integer "order_id"
    t.integer "product_id"
    t.integer "product_variant_id"
    t.integer "quantity"
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_order_items_on_order_id"
    t.index ["product_id"], name: "index_order_items_on_product_id"
    t.index ["product_variant_id"], name: "index_order_items_on_product_variant_id"
  end

  create_table "orders", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "customer_name"
    t.integer "promotion_id"
    t.integer "promotion_payment_method_id"
    t.integer "status"
    t.decimal "total_amout", precision: 13, scale: 2
    t.datetime "updated_at", null: false
    t.index ["promotion_id"], name: "index_orders_on_promotion_id"
    t.index ["promotion_payment_method_id"], name: "index_orders_on_promotion_payment_method_id"
  end

  create_table "payment_methods", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "name"
    t.datetime "updated_at", null: false
  end

  create_table "product_categories", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "name"
    t.datetime "updated_at", null: false
  end

  create_table "product_variants", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.boolean "default_selection"
    t.string "name"
    t.integer "product_id"
    t.integer "select_type"
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_product_variants_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "description"
    t.string "name"
    t.decimal "price", precision: 13, scale: 2
    t.integer "product_category_id"
    t.integer "promotion_id"
    t.datetime "updated_at", null: false
    t.index ["product_category_id"], name: "index_products_on_product_category_id"
    t.index ["promotion_id"], name: "index_products_on_promotion_id"
  end

  create_table "promotion_payment_methods", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.integer "payment_method_id"
    t.string "pix_key"
    t.integer "promotion_id"
    t.datetime "updated_at", null: false
    t.index ["payment_method_id"], name: "index_promotion_payment_methods_on_payment_method_id"
    t.index ["promotion_id"], name: "index_promotion_payment_methods_on_promotion_id"
  end

  create_table "promotions", force: :cascade do |t|
    t.boolean "active"
    t.datetime "created_at", null: false
    t.string "name"
    t.integer "promotion_type"
    t.datetime "updated_at", null: false
  end
end
