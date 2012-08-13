class Asset < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :image
  belongs_to :imageable, :polymorphic => true
  has_attached_file :image, :styles => {
    :home_slide => "680x320#",
    :large => "600x800",
    :medium => "445x580",
    :small => "150x200",
    :thumb => "100x100"
  },
  :storage => :s3,
  :s3_credentials => {
    :bucket            => ENV['S3_BUCKET_NAME'],
    :access_key_id     => ENV['AWS_ACCESS_KEY_ID'],
    :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']
  }
end
