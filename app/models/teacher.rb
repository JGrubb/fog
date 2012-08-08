class Teacher < ActiveRecord::Base
  attr_accessible :bio, :name, :imageable_attributes
  has_one :picture, :as => :imageable
end
