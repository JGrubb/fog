class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :persistent_stuff  
  protected

  def require_user
    unless logged_in?
      flash[:error] = "Please log in first."
      redirect_to new_user_session_path
    end
  end

  def logged_in?
    !!current_user
  end

  helper_method :current_user, :meta_desc
  private
  
  def persistent_stuff
    @announcements = Announcement.order("created_at DESC").limit(3)
    @footer_occurrences = Occurrence.where("starts > :t", :t => Date.today - 1).order("starts ASC").limit(3)
  end

  def meta_desc
    @description || "description"
  end
end
