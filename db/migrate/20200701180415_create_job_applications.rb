class CreateJobApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :job_applications do |t|
      t.date :date_submitted
      t.string :position
      t.integer :salary
      t.text :description
      t.string :status, default: 'pending'
      t.belongs_to :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
