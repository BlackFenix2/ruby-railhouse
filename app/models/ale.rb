class Ale < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true, length: { minimum: 10 }
  validates :price, presence: true, numericality: { greater_than: 0 }
  validates :imageUrl, presence: true
end
