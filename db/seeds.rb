require 'faker'

Thing.destroy_all

2.times do
  Thing.create!(name: Faker::Hipster.word, description: Faker::Hipster.sentence )
end
