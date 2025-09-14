function sendMail(){
    let parms = {
        name :  document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_u1w4xwp", "template_5kmjt1b", parms).then(alert("Email Sent"))
}