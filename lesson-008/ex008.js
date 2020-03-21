function loadPage() {
    var message = window.document.getElementById('message');
    var photo = window.document.getElementById('photo');
    var date = new Date();
    var hour = date.getHours();

    message.innerHTML = `Now it's ${hour} o'clock!`;

    if (hour >= 5 && hour < 12) {
        photo.src = "images/morning.png"
        window.document.body.style.background = "#e2cd9f";
    } else if (hour < 18) {
        photo.src = "images/afternoon.png";
        window.document.body.style.background = "#b9846f";
    } else {
        photo.src = "images/night.png";
        window.document.body.style.background = "#515154";
    }
}