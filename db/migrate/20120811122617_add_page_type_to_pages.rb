class AddPageTypeToPages < ActiveRecord::Migration
  def change
    add_column :pages, :page_type, :string
    remove_column :pages, :blog_post
  end
end
