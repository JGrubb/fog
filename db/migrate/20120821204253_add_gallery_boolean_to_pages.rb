class AddGalleryBooleanToPages < ActiveRecord::Migration
  def change
    add_column :pages, :gallery, :boolean, default: false
  end
end
