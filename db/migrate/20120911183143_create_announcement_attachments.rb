class CreateAnnouncementAttachments < ActiveRecord::Migration
  def change
    create_table :announcement_attachments do |t|
      t.timestamps
    end
  end
end
