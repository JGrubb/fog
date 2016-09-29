class AnnouncementAttachment < ActiveRecord::Base
  attr_accessible :file
  belongs_to :announcement
  has_attached_file :file,
                    :storage => :s3,
                    :s3_credentials => {
                      :bucket             => PlatformSH::config['variables']['S3_BUCKET'] || S3_BUCKET,
                      :access_key_id      => PlatformSH::config['variables']['S3_ACCESS_KEY'] || S3_ACCESS_KEY,
                      :secret_access_key  => PlatformSH::config['variables']['S3_SECRET_KEY'] || S3_SECRET_KEY
                    }
  validates_attachment_content_type :file, :content_type => /\Aapplication\/.*\Z/
end
