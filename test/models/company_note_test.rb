# == Schema Information
#
# Table name: company_notes
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :string
#  company_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class CompanyNoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
