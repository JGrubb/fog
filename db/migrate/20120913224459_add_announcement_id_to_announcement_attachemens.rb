class AddAnnouncementIdToAnnouncementAttachemens < ActiveRecord::Migration
  def change
    add_column :announcement_attachments, :announcement_id, :integer
  end
end
