class Comment < ApplicationRecord
    belongs_to :vehicle
    belongs_to :user
end
