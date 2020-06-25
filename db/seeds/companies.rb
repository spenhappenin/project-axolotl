
#############################
#####     COMPANIES     #####
#############################

user = User.create(
  first_name: 'Hugh',
  last_name: 'Peppercorn',
  email: 'test@test.com',
  password: 'password',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMqIekyXIictVeZ8JUSW-d5RmsxXHdfA6WVPdh55g474N5y496A'
)

companies = [
  { title: 'Amazon', description: 'All Amazon teams and businesses, from Prime delivery to AWS, are guided by four key tenets: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking.', logo_url: 'https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png', industry: 'internet', user_id: 1 },
  { title: 'LinkedIn', description: 'LinkedIn connects the world’s professionals to make them more productive and successful and transforms the ways companies hire, market, and sell. Our vision is to create economic opportunity for every member of the global workforce through the ongoing development of the world’s first Economic Graph. LinkedIn has offices around the world.', logo_url: 'https://media.glassdoor.com/sql/34865/linkedin-squarelogo-1559685522766.png', industry: 'internet', user_id: 1 },
  { title: 'MX', description: 'MX partners with digital banking providers and financial institutions to provide data-driven money management solutions that amplify user loyalty and drive an increase in profitable revenue. Our solutions help users better understand their finances and ultimately improve their quality of life.', logo_url: 'https://media.glassdoor.com/sql/928672/mx-squarelogo-1418321020307.png', industry: '	financial analytics & research', user_id: 1 },
  { title: 'Facebook', description: 'Facebook is defined by our unique culture – one that rewards impact. We encourage our people to be bold and solve the problems they care most about. Facebook employees work in small teams that move fast and iterate to develop new products. Together, we help others build stronger communities — and we\'re just getting started.', logo_url: 'https://media.glassdoor.com/sql/40772/facebook-squarelogo-1585343823207.png', industry: 'internet', user_id: 1 },
  { title: 'Adobe', description: 'Adobe is the global leader in digital media and digital marketing solutions. Our creative, marketing and document solutions empower everyone – from emerging artists to global brands – to bring digital creations to life and deliver immersive, compelling experiences to the right person at the right moment for the best results. In short, Adobe is everywhere, and we’re changing the world through digital experiences.', logo_url: 'https://media.glassdoor.com/sql/1090/adobe-squarelogo-1439410514152.png', industry: 'computer hardware & software', user_id: 1 },
  { title: 'Divvy', description: 'At Divvy, Our vision is to become the the modern software bank for business of every small-to-medium business in America. Our FREE one-stop-shop financial SaaS platform enables businesses to spend smarter by providing instant insight and transparency into company-wide spend and the ability to easily manage it; all in real-time! (+ many more features!)', logo_url: 'https://media.glassdoor.com/sql/1549647/divvypay-squarelogo-1563289869394.png', industry: '	financial transaction processing', user_id: 1 },
  { title: 'Verisys', description: 'Verisys is the leading provider of the most comprehensive health care data, coupled with deep health care industry experience to provide the data through agile technology used to screen, verify, monitor for credentialing, enrolling, and hiring the individuals and entities in the health care sector. Keeping bad actors out of the health care system makes it safer for everyone.', logo_url: 'https://media.glassdoor.com/sql/702103/verisys-squarelogo-1571013105139.png', industry: 'computer hardware & software', user_id: 1 },
  { title: 'CHG Healthcare', description: 'In 1979, CHG Healthcare invented the locum tenens staffing model as a way to deliver much-needed medical care to rural communities across the country. Nearly four decades later, the company is a leader in healthcare staffing and the nation’s largest provider of locum tenens services.', logo_url: 'https://media.glassdoor.com/sql/40836/chg-healthcare-squarelogo-1522963066667.png', industry: 'staffing & outsourcing', user_id: 1 },
  { title: 'Chick-fil-A', description: 'Atlanta-based Chick-fil-A, Inc. is a family owned and privately held restaurant company founded in 1967 by S. Truett Cathy. Devoted to serving the local communities in which its franchised restaurants operate, and known for its original chicken sandwich, Chick-fil-A serves freshly prepared food in more than 2,500 restaurants in 47 states, Washington, D.C., and Canada.', logo_url: 'https://media.glassdoor.com/sql/5873/chick-fil-a-squarelogo-1512608990237.png', industry: 'fast-food', user_id: 1 },
  { title: 'Domo', description: 'Domo was founded in 2010 by Omniture co-founder and longtime CEO Josh James. As Omniture CEO, James saw how access to real-time data could help online marketers make better and more profitable decisions. He was frustrated that he couldn’t have that same access to data about his own business. The data he wanted was trapped in multiple systems, databases, spreadsheets and presentations.', logo_url: 'https://media.glassdoor.com/sql/627923/domo-squarelogo-1378314686312.png', industry: '	computer hardware & software', user_id: 1 }
]

companies.each do |company|
  c = Company.create_with(company).find_or_create_by(title: company[:title])
  c.save
end

puts "#{companies.length} Companies Seeded"
