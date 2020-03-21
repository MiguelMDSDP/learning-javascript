function verify() {
    var date = new Date();

    var result = window.document.querySelector("div#result");
    var textYear = window.document.getElementById("text-year");

    var birthYear = Number(textYear.value);
    var currentYear = date.getFullYear();

    var img = document.createElement("img");
    img.setAttribute("id", "photo");

    if (textYear.value.length == 0 || birthYear > currentYear) {
        result.innerHTML = "[ERROR] Verify answers and try again.";
    } else {
        var radioSex = document.getElementsByName("radio-sex");
        var age = currentYear - birthYear;
        var genre = "man";

        if (radioSex[0].checked) { //Male
            genre = "man";
            if (age <= 10) {
                img.setAttribute("src", "images/baby-man.png");
            } else if (age <= 20) {
                img.setAttribute("src", "images/young-man.png");
            } else if (age < 60) {
                img.setAttribute("src", "images/man.png");
            } else {
                img.setAttribute("src", "images/old-man.png");
            }
        } else if (radioSex[1].checked) { //Female
            genre = "woman";
            if (age <= 10) {
                img.setAttribute("src", "images/baby-woman.png");
            } else if (age <= 20) {
                img.setAttribute("src", "images/young-woman.png");
            } else if (age < 60) {
                img.setAttribute("src", "images/woman.png");
            } else {
                img.setAttribute("src", "images/old-woman.png");
            }
        }

        result.innerHTML = `<p>You're a ${genre} with ${age} years old!</p>`;
        result.appendChild(img);
    }

    textYear.value = "";
}