class ProductCategory < ApplicationRecord
    has_many :products, class_name: "Product"

    validates :name, presence: true
end
