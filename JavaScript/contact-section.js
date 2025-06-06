document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        let params = {
            from_name: document.querySelector("input[placeholder='First Name']").value,
            from_surname: document.querySelector("input[placeholder='Last Name']").value,
            phone: document.querySelector("input[placeholder='Mobile Number']").value,
            email: document.querySelector("input[placeholder='Email Address']").value,
            subject: document.querySelector("input[placeholder='Email Subject']").value,
            importance: document.querySelector("select[name='importance']").value,
            message: document.querySelector("textarea").value
        };

        console.log(params);

        // emailjs.send("service_x7aq2yu", "template_vrcq3j9", params)
        emailjs.send("service_x7aq2yu", "template_tpwxb4p", params)
            .then(function (response) {
                // alert("The message has been sent successfully!");
                document.getElementById("successDialog").showModal();

                console.log("SUCCESS!", response.status, response.text);
            }, function (error) {
                alert("Error sending! Please try again.");
                console.log("FAILED...", error);
            });

        document.querySelector("form").reset();
    });
});