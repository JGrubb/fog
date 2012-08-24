class Event < ActiveRecord::Base
  has_many :occurences
  accepts_nested_attributes_for :occurences, allow_destroy: true
  attr_accessible :description, :title, :occurrences_attributes
end
