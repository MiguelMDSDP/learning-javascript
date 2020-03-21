var day = new Date()

switch (day.getDay()) {
    case 0:
        window.alert("Today is sunday!");
        break;
    case 1:
        window.alert("Today is monday!")
        break;
    case 2:
        window.alert("Today is tuesday!")
        break;
    case 3:
        window.alert("Today is wednesday!")
        break;
    case 4:
        window.alert("Today is thursday!")
        break;
    case 5:
        window.alert("Today is friday!")
        break;
    case 6:
        window.alert("Today is saturday!")
        break;
}

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