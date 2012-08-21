class Event < Page
  default_scope where(page_type: "event") 
  has_many :occurences
end
