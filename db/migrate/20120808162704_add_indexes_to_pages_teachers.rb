class AddIndexesToPagesTeachers < ActiveRecord::Migration
  def change
    add_index :pages, :slug
    add_index :teachers, :slug
  end
end
