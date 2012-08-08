class Teacher < ActiveRecord::Base
  
  has_one :picture, :as => :imageable
  accepts_nested_attributes_for :picture
  attr_accessible :bio, :name, :picture_attributes
  
end
