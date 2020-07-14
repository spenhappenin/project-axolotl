class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :event_type
      t.string :sub_type
      t.datetime :scheduled_date
      t.boolean :complete, default: false
      t.belongs_to :job_application, null: false, foreign_key: true

      t.timestamps
    end
  end
end
