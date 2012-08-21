class CreateOccurrences < ActiveRecord::Migration
  def change
    create_table :occurrences do |t|
      t.datetime :starts
      t.datetime :ends
      t.integer :interval
      t.references :event

      t.timestamps
    end
    add_index :occurrences, :event_id
  end
end
