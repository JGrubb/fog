
class Event < ActiveRecord::Base
  has_many :occurrences, dependent: :destroy
  accepts_nested_attributes_for :occurrences, allow_destroy: true
  attr_accessible :description, :title, :occurrences_attributes
  validates :title, presence: true
end
