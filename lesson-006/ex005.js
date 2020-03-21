var divArea = window.document.getElementById('area');

divArea.addEventListener('click', myClick)
divArea.addEventListener('mouseenter', myMouseEnter)
divArea.addEventListener('mouseout', myMouseOut)

function myClick() {
    divArea.innerText = "Clicked!";
}

function myMouseEnter() {
    divArea.innerText = "Ready to click..."
}

function myMouseOut() {
    divArea.innerText = "Interacting";
}