
#############################
#####     COMPANIES     #####
#############################

user = User.find(1)

user.companies.each do |company|
  3.times do |i|
    company.company_notes.create(
      title: (i + 1) % 2 == 0 ? "Note Title #{i + 1}" : '',
      body: 'Here is the note body...'
    )
  end
end
