document.querySelector("#pageContent").classList.add("page-content-style");

var elements = pageContent.querySelectorAll("#pageContent > div");
elements.forEach(function (element) {
    element.classList.add("page-content-div-style");
});
