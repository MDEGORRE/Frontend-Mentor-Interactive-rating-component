const formSubmission = {
    init: function () {
        document.querySelector("form").addEventListener("submit", formSubmission.handleSubmit);
        window.addEventListener("resize", updateSize);
    },

    handleSubmit: function (event) {
        event.preventDefault();
        let rating = document.querySelector('input[name="rating"]:checked').value;
        document.querySelector(".rating_form").textContent = rating;
        document.querySelector("main").classList.add("content_hidden");
        document.querySelector("section").classList.remove("content_hidden");
    },
};

function updateSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

updateSize();
document.addEventListener("DOMContentLoaded", formSubmission.init);
