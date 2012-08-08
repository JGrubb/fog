class Asset < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :image
  belongs_to :imageable, :polymorphic => true
  has_attached_file :image, :styles => {
    :large => "600x800"
    :medium => "480x600",
    :small => "150x200",
    :thumb => "100x100"
  }
end
