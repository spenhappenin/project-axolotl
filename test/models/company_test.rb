# == Schema Information
#
# Table name: companies
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :text
#  logo_url    :text
#  industry    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :bigint           not null
#
require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
