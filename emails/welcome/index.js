const defaulMails = [
    "co.haffar@gmail.com" , 
    "gestion@gmail.com" , 
    "iramzhara81@gmail.com" ,
    "Olaazcomputerworld@gmail.com" ,
    "shahriar49454945@gmail.com", 
    "wola797@gmail.com"
]

function sendEmail(receiver , position) {
    var tempParams = {
        to_email : receiver , 
        to_name : defaulMails[position].split("@")[0]
    }

    emailjs.send("yanndevs" , "template_fbj7c8p" , tempParams).then(function(res){
        console.log(res)
    })
  }

  

  document.getElementById('send-mail').addEventListener("click" , function(){
    // sendEmail(defaulMails[0] , 0)
    $("spinner").addClass("show")
    for(var i = 0 ; i < defaulMails.length ; i++){
        sendEmail(defaulMails[i] , i)
    }
    $("spinner").removeClass("show")
    
  })