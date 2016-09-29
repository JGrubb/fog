class Asset < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :image, :caption
  belongs_to :imageable, :polymorphic => true
  has_attached_file :image, :styles => {
    :home_slide => "680x320#",
    :large => "600x800",
    :medium => "204x270",
    :small => "140x185#",
    :thumb => "80x80#"
  },
  :storage => :s3,
  :s3_credentials => {
      :bucket             => PlatformSH::config['variables']['S3_BUCKET'] || S3_BUCKET,
      :access_key_id      => PlatformSH::config['variables']['S3_ACCESS_KEY'] || S3_ACCESS_KEY,
      :secret_access_key  => PlatformSH::config['variables']['S3_SECRET_KEY'] || S3_SECRET_KEY
  }
end
