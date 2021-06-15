function sendMail(contactForm) {
    emailjs.send("outlook", "oliver", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "your_message": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}