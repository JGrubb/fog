class AnnouncementAttachment < ActiveRecord::Base
  attr_accessible :file
  belongs_to :announcement
  has_attached_file :file,
                    :storage => :s3,
                    :s3_credentials => {
                      :bucket             => ENV['S3_BUCKET_NAME'],
                      :access_key_id      => ENV['AWS_ACCESS_KEY_ID'],
                      :secret_access_key  => ENV['AWS_SECRET_ACCESS_KEY']
                    }
end
