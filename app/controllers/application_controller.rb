class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :persistent_stuff  
  protected
  
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def require_user
    unless logged_in?
      flash[:error] = "Please log in first."
      redirect_to new_session_path
    end
  end

  def logged_in?
    !!current_user
  end

  helper_method :current_user
  private
  
  def persistent_stuff
    @announcements = Announcement.order("created_at DESC").limit(3)
    @footer_occurrences = Occurrence.where("starts > :t", :t => Date.today - 1).order("starts ASC").limit(3)
  end
end
