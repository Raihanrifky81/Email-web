document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var toEmail = document.getElementById("toEmail").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "Raihan Maulana",
    Password: "klatenbersinar2019",
    To: toEmail,
    From: "raihanrifky81@gmail.com",
    Subject: subject,
    Body: message
  })
    .then(function(message) {
      alert("Email berhasil dikirim");
      document.getElementById("emailForm").reset();
    })
    .catch(function(error) {
      console.error(error);
      alert("Gagal mengirim email");
    });
});
