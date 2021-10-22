var mails
// (function(){
//     //https://yanndevs-funnel-app.herokuapp.com/email/get
    
//     // addNewMail()
     


// })()

window.addEventListener("load" , function(){
    getAllMails()
    console.log("loaded")
    
})

function getAllMails(){
    let xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', 'https://yanndevs-funnel-app.herokuapp.com/email/get');

    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function() {
      if (xhr.status != 200) { // analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else { // show the result
        mails = JSON.parse(xhr.response).data
        $('.email_list').append(setTable())
      }
    };
}

async function getAllMail(){
    await fetch("https://yanndevs-funnel-app.herokuapp.com/email/get", {
        method : "GET" ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(result => {
        console.log(result.data)
    })

}

 function addNewMail(){
    const mail = {
        user : "gaelfomen@gmail.com"
    }
     fetch("https://yanndevs-funnel-app.herokuapp.com/mail/new" , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            user : mail.user
        })
    }).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })


}


function setTable(){
    return`
        <table>
            <thead>
                <th>Email</th>
                <th>Subscribed on </th>
                <th>Operatios</th>
            </thead>
            <tbody>
                ${mails ? mails.map(mail => (
                    `<tr>
                        <td>${mail.user}</td>
                        <td>${mail.subscribed_on}</td>
                        <td><a href="#">delete</a></td>
                    </tr>`
                )) : `<span>You have no mails on your email list</span>`}
            </tbody>
        </table>
    `
}