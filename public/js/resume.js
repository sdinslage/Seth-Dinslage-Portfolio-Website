function toggleImage() {
    var container1 = document.querySelector(".content-wrapper .resume-image-container:nth-of-type(1)");
    var container2 = document.querySelector(".content-wrapper .resume-image-container:nth-of-type(2)");
    var caption = document.getElementById("caption");

    if (container1.style.display === "none" || container1.style.display === "") {
        container1.style.display = "block";
        container2.style.display = "none";
        caption.innerText = "Showing 1 of 2";
    } else {
        container1.style.display = "none";
        container2.style.display = "block";
        container2.querySelector(".image-caption").innerText = "Showing 2 of 2";
    }
}
