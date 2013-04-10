module PagesHelper
  
  def title
    if @page
      "#{@page.title} | Fields of Green Montessori"
    elsif @occurrences
      "Events Calendar | Fields of Green Montessori"
    elsif @announcement
      "#{@announcement.title} | Fields of Green Montessori"
    elsif @teachers
      "Our Teachers | Fields of Green Montessori"
    elsif @teacher
      "#{@teacher.name} | Fields of Green Montessori"
    elsif @testimonials
      "Testimonials | Fields of Green Montessori"
    else
      "Fields of Green Montessori"
    end
  end
  
end
