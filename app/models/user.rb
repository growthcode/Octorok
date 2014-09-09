class User < ActiveRecord::Base
  validates :first_name, presence: true
            :last_name, presence: true
            :user_name, presence: true, uniqueness: true
            :email, presence: true, uniqueness: true
            :password_hash, presence: true, length: { minimum: 6 }

end
