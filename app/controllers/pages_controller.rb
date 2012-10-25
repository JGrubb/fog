class PagesController < ApplicationController
  before_filter :require_user, :only => ["new", "create", "edit", "update"]

  def index
    @pages = Page.where("page_type = ''")
  end
  
  def payment
    @links = Page.current_students
    @sidebar_blog = Blog.most_recent
    render "payment"
  end
  
  def contact
    @message = Message.new
    @links = Page.prospective_students
    @sidebar_blog = Blog.most_recent
  end
  # GET /pages/1
  # GET /pages/1.json
  def show
    @page = Page.find(params[:id])
    @page.images.build
    
    get_sidebar(@page)
    
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @page }
    end
  end
  
  def home
    @page = Page.find(2)
    @announcement = Announcement.last
    @testimonial = Testimonial.all.sample    
    render :layout => 'home'
  end
 

  # GET /pages/new
  # GET /pages/new.json
  def new
    
    @page = Page.new
    @page.images.build
    
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @page }
    end
  end

  # GET /pages/1/edit
  def edit
    @page = Page.find(params[:id])
  end

  # POST /pages
  # POST /pages.json
  def create
    @page = Page.new(params[:page])

    respond_to do |format|
      if @page.save
        format.html { redirect_to @page, notice: 'Page was successfully created.' }
        format.json { render json: @page, status: :created, location: @page }
      else
        format.html { render action: "new" }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /pages/1
  # PUT /pages/1.json
  def update
    @page = Page.find(params[:id])

    respond_to do |format|
      if @page.update_attributes(params[:page])
        format.html { redirect_to page_path(@page), notice: 'Page was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pages/1
  # DELETE /pages/1.json
  def destroy
    @page = Page.find(params[:id])
    @page.destroy
    redirct_to root_path
  end
  
  def send_contact
    @message = Message.new(params[:message])
    if @message.valid?
      ContactMailer.new_message(@message).deliver
      flash[:notice] = "Message was successfully sent."
      redirect_to :action => :contact
    else
      flash[:error] = "Please fill all fields.  Don't forget the poem at the end."
      redirect_to :action => :contact
    end
  end
  
  private
  
  def get_sidebar(page)
    @links = Page.where("layout = :layout", :layout => page.layout).order("id ASC")
    @sidebar_blog = Blog.order("created_at DESC").limit(3)
  end
end
