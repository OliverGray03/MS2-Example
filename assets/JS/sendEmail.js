function sendMail(name, email, message) {
    emailjs.send("service_rnc289n", "Groundhopperenquiry", {
            "from_name": name,
            "from_email": email,
            "message": message,
        }, "user_Jx0EvAXxchxmboW5oqbXL")
        .then(
            function (response) {
                console.log("SUCCESS", response);
                $(".contact-form").hide();
                $(".form-success").show();
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
}

$(document).ready(function () {
    $(".contact-form-btn").click(function (event) {
        event.preventDefault();
        var name = $(".name-input").val();
        var email = $(".email-input").val();
        var message = $(".message-input").val();
        sendMail(name, email, message);
    });
})