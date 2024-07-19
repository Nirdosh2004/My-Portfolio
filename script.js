// const scroll = new LocomotiveScroll({
//           el: document.querySelector('.main'),
//           smooth: true
//       });



function sendMail(){
          var templateParams = {
                    my_name: document.getElementById("my_name").value,
                    email_id: document.getElementById("email_id").value,
                    message:document.getElementById("message").value,
                    
                };
                
                emailjs.send("service_a21yug9","template_fcvcmft", templateParams)
                    .then(function(response) {
                      alert("Email Send successfully. Thankyou!");
                    }, function(err) {
                       alert('FAILED... to sent . Try again!');
                    });
}