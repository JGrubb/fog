class ContactMailer < ActionMailer::Base
  
  default :to => "dsmorto@frontiernet.net"

  def new_message(message)
    @message = message
    mail( from:            @message.email, 
          subject:         "FOG website contact",
          template_path:   "mailers",
          template_name:   "contact_email")
  end
  
end
