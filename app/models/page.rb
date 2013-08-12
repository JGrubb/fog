class Page < ActiveRecord::Base
  
  attr_accessible :body, :title, :blog_post, :images_attributes, :gallery, :layout, :description
  
  validates :title, :body, :presence => true
  
  has_many :images, as: :imageable, class_name: "Asset", dependent: :destroy
  
  accepts_nested_attributes_for :images, :reject_if => lambda { |i| i[:image].blank?  }, allow_destroy: true
  
  extend FriendlyId
  friendly_id :title, use: :slugged

  scope :current_students, where("layout = :layout", :layout => "current-students").order("id ASC")
  scope :prospective_students, where("layout = :layout", :layout => "prospective-students").order("id ASC")

end
