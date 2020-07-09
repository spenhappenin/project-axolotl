class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :title
      t.text :description
      t.text :logo_url, default: "https://d3bza9ldbeb18h.cloudfront.net/assets/placeholder-company-b9d0a167b1f7460768517d115285de2337c6e2a84f4285617722efa587c693fc.png"
      t.string :industry

      t.timestamps
    end
  end
end
