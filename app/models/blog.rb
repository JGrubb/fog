class Blog < Page
  default_scope where(:page_type => 'blog_post')
end