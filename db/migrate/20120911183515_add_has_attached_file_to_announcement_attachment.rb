class AddHasAttachedFileToAnnouncementAttachment < ActiveRecord::Migration
  def change
    add_attachment :announcement_attachments, :file
  end
end
