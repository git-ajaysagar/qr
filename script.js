let input = document.querySelector('textarea');
let button = document.querySelector('button');
let generatedqrcode = new QRCode(document.querySelector('#qrcode'), {
    text: "",
    width: 248,
    height: 250,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

button.addEventListener('click',()=>{
    let inputValue = input.value;
    generatedqrcode.makeCode(inputValue);
})
