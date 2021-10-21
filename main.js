(function(){
   
      
    //https://yanndevs-funnel-app.herokuapp.com/email/get
    getAllMails()
    $('.email_list').append(setTable())
})()

 function getAllMails(){
    const mail = {
        user : "gaelfomen@gmail.com"
    }
     fetch("https://yanndevs-funnel-app.herokuapp.com/mail/new" , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : mail.user 
    }).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })


    // $.ajax({
    //     type : "GET" , 
    //     url : "https://yanndevs-funnel-app.herokuapp.com/email/get" , 
    //     mode : "no-cors" ,
    //     success : function(res){
    //         console.log(res)
    //     }
    // })
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

                <tr>
                    <td>gaelfomen@gmail.com</td>
                    <td>12-04-2021</td>
                    <td>delete</td>
                </tr>
                <tr>
                    <td>gaelfomen@gmail.com</td>
                    <td>12-04-2021</td>
                    <td>delete</td>
                </tr>
                <tr>
                    <td>gaelfomen@gmail.com</td>
                    <td>12-04-2021</td>
                    <td>delete</td>
                </tr>
            </tbody>
        </table>
    `
}