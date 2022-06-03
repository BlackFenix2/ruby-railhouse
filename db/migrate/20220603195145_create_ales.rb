class CreateAles < ActiveRecord::Migration[7.0]
  def change
    create_table :ales do |t|
      t.string :title
      t.text :description
      t.decimal :price
      t.string :imageUrl

      t.timestamps
    end
  end
end
