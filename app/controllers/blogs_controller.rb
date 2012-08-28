class BlogsController < ApplicationController
  # GET /s
  # GET /blogs.json
  def index
    @blog_posts = Blog.all
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @blog_posts }
    end
  end

  # GET /blog_posts/1
  # GET /blog_posts/1.json
  def show
    @page = Blog.find(params[:id])

    respond_to do |format|
      format.html 
      format.json { render json: @blog_post }
    end
  end

  # GET /blog_posts/new
  # GET /blog_posts/new.json
  def new
    @blog_post = Blog.new
    @blog_post.images.build

    respond_to do |format|
      format.html 
      format.json { render json: @page }
    end
  end

  # GET /blog_posts/1/edit
  def edit
    @page = Blog.find(params[:id])
    render "pages/edit"
  end

  # POST /blog_posts
  # POST /blog_posts.json
  def create
    @blog_post = Blog.new(params[:blog])
    @blog_post.page_type = 'blog_post'
    respond_to do |format|
      if @blog_post.save
        format.html { redirect_to @blog_post, notice: 'Blog was successfully created.' }
        format.json { render json: @blog_post, status: :created, location: @blog_post }
      else
        format.html { render action: "new" }
        format.json { render json: @blog_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /blog_posts/1
  # PUT /blog_posts/1.json
  def update
    @blog_post = Blog.find(params[:id])

    respond_to do |format|
      if @blog_post.update_attributes(params[:blog_post])
        format.html { redirect_to @blog_post, notice: 'Blog was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @blog_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blog_posts/1
  # DELETE /blog_posts/1.json
  def destroy
    @blog_post = Blog.find(params[:id])
    @blog_post.destroy

    respond_to do |format|
      format.html { redirect_to blog_url, notice: "Blog post deleted" }
      format.json { head :no_content }
    end
  end
end
