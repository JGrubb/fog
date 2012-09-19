class Announcement < ActiveRecord::Base
  attr_accessible :body, :title, :announcement_attachments_attributes
  has_many :announcement_attachments
  accepts_nested_attributes_for :announcement_attachments, 
                                allow_destroy: true,
                                reject_if: lambda { |i| i[:file].blank? }
end
