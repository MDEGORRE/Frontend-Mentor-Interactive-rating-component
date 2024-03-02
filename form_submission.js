const formSubmission = {
    init: function () {
        document.querySelector("form").addEventListener("submit", formSubmission.handleSubmit);
    },

    handleSubmit: function (event) {
        event.preventDefault();
        let rating = document.querySelector("form").rating.value;
        document.querySelector(".rating_form").textContent = rating;
        document.querySelector(".formContent").classList.add("content_hidden");
        document.querySelector(".thankYou").classList.remove("content_hidden");
    },
};

document.addEventListener("DOMContentLoaded", formSubmission.init);