function sendMail(){
    let parms = {
        name :  document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_m2hag7y", "template_5kmjt1b", parms).then(alert("Email Sent"))
}