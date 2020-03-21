function add() {
    var input1 = window.document.getElementById('text1');
    var input2 = window.document.getElementById('text2');

    window.alert(`O resultado da sua soma é: ${Number(input1.value) + Number(input2.value)}`);

    input1.value = ""
    input2.value = ""
}