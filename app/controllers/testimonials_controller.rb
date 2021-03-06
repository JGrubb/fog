class TestimonialsController < ApplicationController

  before_filter :get_links, :only => ["index", "show"]

  def index
    @testimonials = Testimonial.order('id DESC')
    @description = "Read what some other parents have said about their experiences and those of their children at Fields of Green Montessori."
  end

  def show
    @testimonial = Testimonial.find(params[:id])
    @description = @testimonial.body[0..200]
  end
  
  
  def new
    @testimonial = Testimonial.new
  end

  def create
    @testimonial = Testimonial.new(params[:testimonial])
    @testimonial.page_type = "testimonial"
    if @testimonial.save
      redirect_to testimonials_path
    else
      flash[:error] = "Something went wrong, please try again"
      render action: "new"
    end
  end

  def edit
    @testimonial = Testimonial.find(params[:id])
  end

  def update
    @testimonial = Testimonial.find(params[:id])
    if @testimonial.update_attributes(params[:testimonial])
      flash[:notice] = "Testimonial successfully updated"
      redirect_to testimonial_path(@testimonial)
    else
      flash[:error] = "Something prevented the Testimonial from being saved."
      render action: "new"
    end
  end

  def destroy
    @testimonial = Testimonial.find(params[:id])
    @testimonial.destroy
    redirect_to testimonials_path
  end

  private

  def get_links
    @links = Page.prospective_students
    @sidebar_blog = Blog.most_recent
  end

end
