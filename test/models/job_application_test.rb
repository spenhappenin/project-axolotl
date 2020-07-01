# == Schema Information
#
# Table name: job_applications
#
#  id             :bigint           not null, primary key
#  date_submitted :datetime
#  position       :string
#  salary         :integer
#  active         :boolean          default(TRUE)
#  company_id     :bigint           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'test_helper'

class JobApplicationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
