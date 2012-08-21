class Occurrence < ActiveRecord::Base
  belongs_to :event
  attr_accessible :ends, :interval, :starts
end
