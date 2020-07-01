class CreateJobApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :job_applications do |t|
      t.datetime :date_submitted
      t.string :position
      t.integer :salary
      t.boolean :active, default: true
      t.belongs_to :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
