namespace :generate_vehicle do
  
        desc "Gera 5 veículos com marca, modelo, cor, combustível e transmissão"
        task generate_vehicles: :environment do
          5.times do
            manofature = Faker::Vehicle.make
            model = Faker::Vehicle.model(make_of_model: manofature)
            color = Faker::Vehicle.color
            fuel = Faker::Vehicle.fuel_type
            transmission = Faker::Vehicle.transmission
            puts "Veículo gerado:"
            puts "Marca: #{manofature}"
            puts "Modelo: #{model}"
            puts "cor: #{color}"
            puts "Combustível: #{fuel}"
            puts "Transmissão: #{transmission}"
            puts "-------------------------------------"
          end
        end
   
end
