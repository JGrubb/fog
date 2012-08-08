class Teacher < ActiveRecord::Base
  
  extend FriendlyId
  friendly_id :name
  
  has_one :picture, :as => :imageable
  
  attr_accessible :bio, :name, :picture_attributes
  
  accepts_nested_attributes_for :picture
  
end
