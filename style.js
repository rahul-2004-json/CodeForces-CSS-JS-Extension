document.querySelector("#pageContent").classList.add("page-content-style");

var len = document.querySelector("#pageContent").childElementCount;
for(var i = 1; i <= len; i++) {
    var selector = "#pageContent > div:nth-child(" + i + ")";
    var element = document.querySelector(selector);

    element.classList.add("page-content-div-style");
    
}