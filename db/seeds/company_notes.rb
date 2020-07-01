
#################################
#####     COMPANY NOTES     #####
#################################

user = User.find(1)

notes = [
  "Maecenas feugiat varius dui quis volutpat. Phasellus nec felis pellentesque, egestas ligula eget, molestie ipsum. Aliquam eget sapien quis ex porttitor eleifend sed vel nisi. Suspendisse potenti. Proin lacinia nunc mauris, quis vestibulum lectus convallis non. Nunc sodales pretium sodales. Phasellus in odio porttitor, tempor eros ut, imperdiet risus. Donec porta at turpis vitae ornare. Aliquam ut metus eget nibh tempus consectetur. Nunc in elementum metus, non lacinia arcu. Etiam efficitur urna nec accumsan auctor. Etiam lacinia enim hendrerit nibh pulvinar mollis. In hac habitasse platea dictumst. Sed dictum tellus quis laoreet auctor. Integer suscipit lectus ac nibh dictum, et porta nunc congue. Praesent tempor tellus tortor, eu mattis lacus sodales ut.Nulla facilisi. Maecenas vestibulum ipsum vel lectus malesuada, non viverra leo convallis. Praesent pulvinar erat id turpis maximus ornare. Phasellus efficitur libero sed felis mollis, nec aliquet est tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ut tristique enim, a dictum leo. Vivamus accumsan mauris neque, vel ornare elit sagittis et. Vestibulum congue, purus ut consequat venenatis, elit erat maximus est, et commodo turpis quam eget dolor. Etiam vitae rutrum orci.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nulla at lectus auctor ultricies. Duis fermentum mi id odio convallis, venenatis bibendum justo tempor. Cras sit amet venenatis enim, ut lobortis risus. Morbi fermentum imperdiet interdum. Proin nibh est, mattis iaculis eleifend sed, bibendum eleifend sem. Donec fermentum mauris quis nisl pulvinar, at varius mi sollicitudin. Donec condimentum risus non consectetur consequat. Nulla facilisi. Aliquam volutpat gravida leo eu egestas. Aenean id dolor nec augue suscipit condimentum ut quis velit. In tellus ex, fringilla sed faucibus a, iaculis at lacus. Morbi ut turpis in ipsum porta sodales. Sed feugiat erat at ullamcorper vehicula. Vivamus ut neque dignissim purus viverra viverra.",
  "Nulla facilisi. Aliquam volutpat gravida leo eu egestas. Aenean id dolor nec augue suscipit condimentum ut quis velit. In tellus ex, fringilla sed faucibus a, iaculis at lacus. Morbi ut turpis in ipsum porta sodales. Sed feugiat erat at ullamcorper vehicula. Vivamus ut neque dignissim purus viverra viverra.",
  "Suspendisse potenti. Mauris pulvinar ac libero et feugiat. Vestibulum sed turpis at lectus egestas eleifend. Nam eu cursus nisl. Etiam suscipit lectus eu nunc imperdiet tincidunt. Nulla facilisi. Quisque enim purus, efficitur vestibulum odio cursus, venenatis efficitur lectus. Vivamus blandit, lorem a suscipit rutrum, nibh justo pharetra est, ut pharetra nulla dolor eget neque. Suspendisse condimentum lectus enim, a ultrices ligula consectetur ac. Etiam suscipit urna vel arcu suscipit, id tempus nibh vehicula. Quisque et odio eget ex mattis ornare efficitur at dolor. Ut massa enim, mattis eu ligula sit amet, aliquam dictum dolor. Fusce eu neque nec leo ultrices eleifend nec vel ipsum. Nam ac venenatis augue.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lacus turpis. Curabitur metus metus, mattis eget arcu in, maximus tincidunt tellus. Proin cursus nibh vitae urna ultricies finibus. Donec porttitor augue id lacus aliquam, at ornare sapien ullamcorper. Donec in augue tristique, accumsan libero sed, posuere enim. Praesent congue metus a lectus lobortis maximus. In ullamcorper malesuada enim eu euismod. Donec accumsan sodales nisi, id interdum purus eleifend in. Sed risus risus, vehicula in lectus sed, venenatis ornare turpis. Praesent quis turpis quis purus placerat consectetur. Aenean tortor lacus, consequat eget faucibus congue, tincidunt sit amet eros. Donec lorem magna, malesuada in lorem vitae, fermentum efficitur risus. Aliquam blandit posuere massa sit amet dictum. Vivamus ullamcorper felis libero, eget lobortis odio venenatis ultrices. Fusce auctor varius sodales. Nullam vulputate orci sed erat efficitur consequat. Nulla facilisi. Vivamus nec elementum nunc. Morbi et egestas diam. Nam id vulputate massa, eget condimentum mauris. Nulla id sollicitudin nulla. Curabitur porta dolor id lorem vehicula, sit amet ultricies mi ultrices.",
  "Aliquam blandit posuere massa sit amet dictum. Vivamus ullamcorper felis libero, eget lobortis odio venenatis ultrices. Fusce auctor varius sodales. Nullam vulputate orci sed erat efficitur consequat. Nulla facilisi. Vivamus nec elementum nunc. Morbi et egestas diam. Nam id vulputate massa, eget condimentum mauris. Nulla id sollicitudin nulla. Curabitur porta dolor id lorem vehicula, sit amet ultricies mi ultrices."
]

user.companies.each do |company|
  3.times do |i|
    company.company_notes.create(
      title: (i + 1) % 2 == 0 ? "Note Title #{i + 1}" : '',
      body: notes.sample
    )
  end
end
