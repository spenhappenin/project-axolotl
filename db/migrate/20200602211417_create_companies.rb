class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :title
      t.text :description
      t.text :logo_url
      t.string :industry

      t.timestamps
    end
  end
end
