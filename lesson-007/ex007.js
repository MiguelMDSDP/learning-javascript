function verify() {
    var txtage = window.document.getElementById("text-age");

    if (Number(txtage.value) < 16) {
        window.alert("You can't vote!");
    } else if (Number(txtage.value) < 18) {
        window.alert("You can vote!");
    } else {
        window.alert("You have to vote!");
    }

    txtage.value = "";
}