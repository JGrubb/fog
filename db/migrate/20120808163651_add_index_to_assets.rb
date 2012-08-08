class AddIndexToAssets < ActiveRecord::Migration
  def change
    add_index :assets, :imageable_id
  end
end
