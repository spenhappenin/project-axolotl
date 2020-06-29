class CreateCompanyNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :company_notes do |t|
      t.string :title
      t.string :body
      t.belongs_to :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
