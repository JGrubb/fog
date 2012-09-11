class Announcement < ActiveRecord::Base
  attr_accessible :body, :title, :file_attributes
  accepts_nested_attributes_for :images, 
                                allow_destroy: true,
                                reject_if: lambda { |i| i[:file].blank? }
end
