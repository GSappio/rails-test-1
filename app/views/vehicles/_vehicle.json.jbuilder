json.extract! vehicle, :id, :manofature,  :model, :color, :fuel, :transmission, :created_at, :updated_at
json.url vehicle_url(vehicle, format: :json)
