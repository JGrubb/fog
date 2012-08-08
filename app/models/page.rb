class Page < ActiveRecord::Base
  attr_accessible :body, :title, :imageable_attributes
  has_many :pictures, :as => :imageable
  extend FriendlyId
  friendly_id :title, use: :slugged
end
