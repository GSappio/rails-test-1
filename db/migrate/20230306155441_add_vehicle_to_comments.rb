class AddVehicleToComments < ActiveRecord::Migration[7.0]
  def change
    add_reference :comments, :vehicle, null: false, foreign_key: true
  end
end
