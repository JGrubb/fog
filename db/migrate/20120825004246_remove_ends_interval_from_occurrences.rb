class RemoveEndsIntervalFromOccurrences < ActiveRecord::Migration
  def up
    remove_column :occurrences, :ends
    remove_column :occurrences, :interval
  end

  def down
    add_column :occurrences, :ends, :datetime
    add_column :occurrences, :interval, :integer
  end
end
