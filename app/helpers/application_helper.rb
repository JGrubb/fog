module ApplicationHelper
  
  def logo
    
  end
  
  def dat_markdown(text)
    options = {
      :autolink => true,
      :space_after_headers => true,
      :no_intra_emphasis => true,
      :fenced_code_blocks => true,
      :hard_wrap  => true
    }
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, options)
    markdown.render(text).html_safe
  end
  
end
