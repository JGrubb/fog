class PagesController < ApplicationController
  before_filter :require_user, :except => ["show", "home", "contact", "payment"]

  def index
    @pages = Page.where("page_type = ''")
  end
  
  def payment
    @links = Page.current_students
    @sidebar_blog = Blog.most_recent
    render "payment"
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
    render :layout => 'home'
  end
 
  def contact
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
        format.html { redirect_to "/#{@page.slug}", notice: 'Page was successfully updated.' }
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

    respond_to do |format|
      format.html { redirect_to pages_url }
      format.json { head :no_content }
    end
  end
  
  private
  
  def get_sidebar(page)
    @links = Page.where("layout = :layout", :layout => page.layout).order("id ASC")
    @sidebar_blog = Blog.order("created_at DESC").limit(3)
  end
end
