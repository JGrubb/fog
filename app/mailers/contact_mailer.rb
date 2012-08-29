class ContactMailer < ActionMailer::Base
  
  default :to => "info@fieldsofgreen.org"

  def new_message(message)
    @message = message
    mail( :from           => @message.name, 
          :subject        => "FOG website contact",
          :template_path  => "mailers",
          :template_name  => "contact_email")
  end
  
end