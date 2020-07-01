
####################################
#####     JOB APPLICATIONS     #####
####################################

user = User.find(1)

user.companies.each_with_index do |company, i|
  2.times do |i|
    company.job_applications.create(
      position: ['Software Engineer', 'Front-end Web Developer', 'Full-stack Developer', 'Backend Engineer'].sample,
      date_submitted: i == 0 ? Date.today - 230 : Date.today,
      description: 'Some description about the application',
      salary: [60000, 75000, 80000, 90000].sample,
      active: i == 0 ? false : true,
      company_id: company.id
    )
  end
end
