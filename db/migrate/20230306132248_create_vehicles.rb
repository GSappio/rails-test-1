class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :manofature
      t.string :model
      t.string :color
      t.string :fuel
      t.string :transmission

      t.timestamps
    end
  end
end
