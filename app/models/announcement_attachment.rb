class AnnouncementAttachment < ActiveRecord::Base
  attr_accessible :file
  belongs_to :announcement
  has_attached_file :file,
                    :storage => :s3,
                    :s3_credentials => {
                      :bucket             => S3_BUCKET_NAME,
                      :access_key_id      => S3_ACCESS_KEY,
                      :secret_access_key  => S3_SECRET_KEY
                    }
end
