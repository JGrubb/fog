class AddSlugToTeachersPages < ActiveRecord::Migration
  def change
    add_column :pages, :slug, :string
    add_column :teachers, :slug, :string
  end
end
