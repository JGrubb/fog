class Announcement < ActiveRecord::Base
  has_many :announcement_attachments
  attr_accessible :body, :title, :announcement_attachments_attributes
  accepts_nested_attributes_for :announcement_attachments, 
                                allow_destroy: true,
                                reject_if: lambda { |i| i[:announcement_attachment].blank? }
end
