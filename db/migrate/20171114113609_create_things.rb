class CreateThings < ActiveRecord::Migration[5.1]
  def change
    create_table :things do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.timestamps
    end
  end
end
