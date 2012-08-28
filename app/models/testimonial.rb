class Testimonial < Page
  # attr_accessible :title, :body
  default_scope where(:page_type => "testimonial")
end
