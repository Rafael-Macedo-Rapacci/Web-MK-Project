var audio = ost_mk;
audio.volume = 0.1;


var hp_atual_scorp = 100;
var hp_atual_sub = 100;

function iniciar() {
    id_img_but.style.boxShadow = "0 0 20px black"
    id_img_but.style.boxShadow = "0 0 20px red"
    img_scorp.style.height = "40vh"
    img_sub.style.height = "40vh"
    nome_scorp.style.width = "10vw"
    nome_scorp.style.visibility = "visible"
    nome_sub.style.width = "9vw"
    nome_sub.style.visibility = "visible"
    hp_scorp.style.width = "28vw"
    hp_scorp.style.borderStyle = "solid"
    hp_sub.style.width = "28vw"
    hp_sub.style.borderStyle = "solid"
    button_soco1.style.opacity = "1"
    button_soco2.style.opacity = "1"
    audio.play();
}

function soco1() {
    hp_atual_sub -= 10;
    vida_sub.style.width = hp_atual_sub + "%";
    img_scorp.src = "scorpion-mortalkombat-fan-remake-punch.gif";
    setTimeout(() => {img_scorp.src = "scorpion-mk-hd-sprite-cancelled-project.gif" }, 1000); 
    if (hp_atual_sub < 1){
        if (hp_atual_scorp == 100){
            main.innerHTML = `Scorpion Wins!<br><b style = "color: red">Flawless Victory</b>`;
            div1.style.opacity = "0";
            div2.style.opacity = "0";
            hp_scorp.style.opacity = "0";
            hp_sub.style.opacity = "0";
            vida_scorp.style.opacity = "0";
            vida_sub.style.opacity = "0";
            audio.src = "ScorpWinsFlawless.mp3";
            audio.play();
            id_img_winner.src = "scorpion-test-your-might-loop-fan-remake.gif";
    }
        else {
            main.innerHTML = `Scorpion Wins!<br>`;
            div1.style.opacity = "0";
            div2.style.opacity = "0";
            hp_scorp.style.opacity = "0";
            hp_sub.style.opacity = "0";
            vida_scorp.style.opacity = "0";
            vida_sub.style.opacity = "0";
            audio.src = "ScorpionWins.mp3";
            audio.play();
            id_img_winner.src = "scorpion-test-your-might-loop-fan-remake.gif";
        }}
}

function soco2() {
    hp_atual_scorp -= 10;
    vida_scorp.style.width = hp_atual_scorp + "%";
    img_sub.src = "subzero-mk-hd-slide-cancelled-project.gif";
    setTimeout(() => {img_sub.src = "subzero-mk-hd-stance-cancelled-project.gif" }, 1000);
    if (hp_atual_scorp < 1){
        if (hp_atual_sub == 100){
            main.innerHTML = `Subzero Wins!<br><b style = "color: red">Flawless Victory</b>`;
            div1.style.opacity = "0";
            div2.style.opacity = "0";
            hp_scorp.style.opacity = "0";
            hp_sub.style.opacity = "0";
            vida_scorp.style.opacity = "0";
            vida_sub.style.opacity = "0";
            audio.src = "SubWinsFlawless.mp3";
            audio.play();
            id_img_winner.src = "subzeroWinsGif.gif";
    }
        else {
            main.innerHTML = `Subzero Wins!<br>`;
            div1.style.opacity = "0";
            div2.style.opacity = "0";
            hp_scorp.style.opacity = "0";
            hp_sub.style.opacity = "0";
            vida_scorp.style.opacity = "0";
            vida_sub.style.opacity = "0";
            audio.src = "SubzeroWins.mp3";
            audio.play();
            id_img_winner.src = "subzeroWinsGif.gif"; 
        }}           
}

