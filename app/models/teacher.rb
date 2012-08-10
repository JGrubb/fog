class Teacher < ActiveRecord::Base
  
  extend FriendlyId
  friendly_id :name, use: :slugged
  
  has_one :image, :as => :imageable, :class_name => "Asset", :dependent => :destroy
  
  attr_accessible :bio, :name, :image_attributes
  
  accepts_nested_attributes_for :image
  
  validates :name, :bio, :image, :presence => true
  
end
