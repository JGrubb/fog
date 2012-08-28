class Blog < Page
  default_scope where(page_type: 'blog_post')
  scope :most_recent, order("created_at DESC").limit(3)
end
