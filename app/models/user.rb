class User < ActiveRecord::Base
  validates  :first_name, presence: true
  validates  :last_name, presence: true
  validates  :username, presence: true, uniqueness: true
  validates  :email, presence: true, uniqueness: true
  validates  :password_hash, presence: true, length: { minimum: 6 }




end
