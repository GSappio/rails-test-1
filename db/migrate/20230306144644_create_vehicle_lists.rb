class CreateVehicleLists < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicle_lists do |t|

      t.timestamps
    end
  end
end
