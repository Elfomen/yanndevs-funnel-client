window.addEventListener("load" , function(){
    if(this.localStorage.getItem("yanndevs-funnel-affiliatesecrets")){
        window.location.href = "https://trafficsecrets.com/traffic-secrets?affiliate_id=3387775&cf_affiliate_id=3387775"
    }
})

document.getElementById("get_book").addEventListener("click" , function(e){
    if(document.getElementById("email").value===""){
        e.preventDefault()
        document.getElementById("email").style.border = "1px solid red"
        
    }else{
        e.preventDefault()
        localStorage.setItem("yanndevs-funnel-affiliatesecrets" , true)
        var mail = document.getElementById("email").value
        setButton()
        addNewMail( mail)
        
    }
})

function setButton(){
    document.getElementsByClassName("load")[0].style.display = "none"
    document.getElementsByClassName("loading")[0].style.display = "inline-block"
    document.getElementById("spin").style.display = "flex"
}
function unsetButton(){
    document.getElementsByClassName("load")[0].style.display = "inline-block"
    document.getElementsByClassName("loading")[0].style.display = "none"
    document.getElementById("spin").style.display = "none"
}

 function addNewMail(mail){
      fetch("https://yanndevs-funnel-app.herokuapp.com/mail/new" , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            user : mail
        })
    }).then(result => {
        console.log(result)
        unsetButton()
        window.location.href = "thanks/index.html";
    }).catch(error => {
        console.log(error)
    })
}