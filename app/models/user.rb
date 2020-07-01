# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string
#  last_name       :string
#  email           :string
#  password_digest :string
#  avatar          :text
#  admin           :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  # Associations
  has_many :companies

  def password_check(password_confirmation)
    self.password == password_confirmation ? true : false
  end
end
