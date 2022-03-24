var audio = ost_mk;
audio.volume = 0.1;


var hp_atual_scorp = 100;
var hp_atual_sub = 100;

function iniciar() {
    id_img_but.style.boxShadow = "0 0 20px black"
    id_img_but.style.boxShadow = "0 0 20px red"
    img_scorp.style.height = "400px"
    img_sub.style.height = "400px"
    nome_scorp.style.width = "124.2px"
    nome_scorp.style.visibility = "visible"
    nome_sub.style.width = "116.84px"
    nome_sub.style.visibility = "visible"
    hp_scorp.style.width = "510px"
    hp_scorp.style.borderStyle = "solid"
    hp_sub.style.width = "510px"
    hp_sub.style.borderStyle = "solid"
    button_soco1.style.opacity = "1"
    button_soco2.style.opacity = "1"
    audio.play();
}

function soco1() {
    hp_atual_sub -= 10;
    vida_sub.style.width = hp_atual_sub + "%"
    if (hp_atual_sub < 1){
        if (hp_atual_scorp == 100){
            main.innerHTML = `Scorpion Wins!<br><b style = "color: red">Flawless Victory</b>`
            div1.style.opacity = "0";
            div2.style.opacity = "0";
            audio.pause();
    }
        else {
            main.innerHTML = `Scorpion Wins!<br>`
            div1.style.opacity = "0";
            div2.style.opacity = "0";
            audio.pause();
            scorpWins.play();}}
}

function soco2() {
    hp_atual_scorp -= 10;
    vida_scorp.style.width = hp_atual_scorp + "%"
    if (hp_atual_scorp < 1){
        if (hp_atual_sub == 100){
            main.innerHTML = `Subzero Wins!<br><b style = "color: red">Flawless Victory</b>`
            div1.style.opacity = "0";
            div2.style.opacity = "0";
            ost_mk.pause();
    }
        else {
            main.innerHTML = `Subzero Wins!<br>`
            div1.style.opacity = "0";
            div2.style.opacity = "0";
            ost_mk.pause();
            subWins.play();}}         
}

