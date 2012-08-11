class AddBlogBooleanToPages < ActiveRecord::Migration
  def change
    add_column :pages, :blog_post, :boolean, :default => false
  end
end
