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
#
class Company < ApplicationRecord
  # Associations
  belongs_to :user

end
