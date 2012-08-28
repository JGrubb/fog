class Item < ActiveRecord::Base
  
  attr_accessible :body, :title, :images_attributes, :gallery, :layout
  
  validates :title, :body, :presence => true
  
  has_many :images, as: :imageable, class_name: "Asset", dependent: :destroy
  
  accepts_nested_attributes_for :images, :reject_if => lambda { |i| i[:image].blank?  }, allow_destroy: true
  
  extend FriendlyId
  friendly_id :title, use: :slugged
  
end
