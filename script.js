(function () {
    emailjs.init("6Yd_oBx_3t842rw2s"); // 🔑 Account → Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("servicewebsite", "template_3c1xumh", {
        message: document.getElementById("message").value
    })
    .then(function () {
        alert("Thank you! Your message has been sent 😊");
        document.getElementById("contactForm").reset();
    }, function () {
        alert("Failed to send message ❌");
    });
});
