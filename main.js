let htmlElement = document.documentElement,
res = document.querySelector(".res");

htmlElement.addEventListener("mouseup", function() {

    var selectedpart = window.getSelection().toString();
    if (selectedpart !== "") {
        res.innerHTML = selectedpart;
    }
})