// получение ip
// let ip;
// $.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
//         ip = data['geoplugin_request'];
// });

const ip = "01";

// расположение враппера по центру
function marginWrapper() {
    const wrapper = document.getElementById('wrapper');

    const wrapperHeight = document.getElementById('wrapper').clientHeight;
    const screenHeight = document.documentElement.clientHeight;

    const marginValue = (screenHeight / 2) - (wrapperHeight / 2) - 50;

    wrapper.style.marginTop = marginValue + 'px';
    alert(marginValue);
};
marginWrapper();

// кнопка
const button = document.getElementById('button');
button.addEventListener('click', changeText);

function changeText() {
    const text = document.querySelector('.text');
    if (ip === "94.25.165.9"){
        text.innerHTML = "Ты красавчик."
    } else {
        text.innerHTML = "Ты петух."
    };
    marginWrapper();
};