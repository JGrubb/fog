class AddSlugToAnnouncements < ActiveRecord::Migration
  def change
    add_column :announcements, :slug, :string
  end
end
