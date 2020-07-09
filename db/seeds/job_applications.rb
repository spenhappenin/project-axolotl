
####################################
#####     JOB APPLICATIONS     #####
####################################

user = User.find(1)

user.companies.each_with_index do |company, i|
  2.times do |i|
    company.job_applications.create(
      position: ['Software Engineer', 'Front-end Web Developer', 'Full-stack Developer', 'Backend Engineer'].sample,
      date_submitted: i == 0 ? Date.today - (230..300).to_a.sample : Date.today - (1..30).to_a.sample,
      description: 'Some description about the application',
      salary: [60000, 75000, 80000, 90000].sample,
      status: i == 0 ? 'denied' : 'pending'
    )
  end
end

Company.find(1).job_applications.create(
  position: 'Software Engineer',
  date_submitted: Date.today,
  description: 'Some description about the application',
  salary: [60000, 75000, 80000, 90000].sample,
  status: 'approved'
)
