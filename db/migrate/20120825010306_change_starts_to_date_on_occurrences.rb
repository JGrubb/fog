class ChangeStartsToDateOnOccurrences < ActiveRecord::Migration
  def up
    change_column :occurrences, :starts, :date
  end

  def down
    change_column :occurrences, :starts, :datetime
  end
end
