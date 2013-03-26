# Load the rails application
require File.expand_path('../application', __FILE__)
require File.expand_path('../s3', __FILE__)
require File.expand_path('../email', __FILE__)

# Initialize the rails application
Fog::Application.initialize!
