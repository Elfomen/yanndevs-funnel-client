function sendEmail(receiver , position) {
    var tempParams = {
        to_email : receiver , 
        to_name : defaulMails[position].split("@")[0]
    }

    emailjs.send("yanndevs" , "template_fbj7c8p" , tempParams).then(function(res){
        console.log(res)
    })
  }

  $("#getCopy").click(function(){
    
  })
