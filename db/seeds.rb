
PaymentMethod.find_or_create_by(name: "Cartão de Crédito")
PaymentMethod.find_or_create_by(name: "Cartão de Débito")
PaymentMethod.find_or_create_by(name: "PIX") do |method|
  method.pix_key_required = true
end
PaymentMethod.find_or_create_by(name: "Ficha/Convite")
