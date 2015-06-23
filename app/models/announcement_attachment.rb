class AnnouncementAttachment < ActiveRecord::Base
  attr_accessible :file
  belongs_to :announcement
  has_attached_file :file,
                    :storage => :s3,
                    :s3_credentials => {
                      :bucket             => S3_BUCKET,
                      :access_key_id      => S3_ACCESS_KEY,
                      :secret_access_key  => S3_SECRET_KEY
                    }
  validates_attachment_content_type :file, :content_type => /\Aapplication\/.*\Z/
end
