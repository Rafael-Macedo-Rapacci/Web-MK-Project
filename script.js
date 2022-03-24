var audio = audio_mk
audio.volume = 0.1;

function outline() {
    id_img_but.style.boxShadow = "0 0 20px red"
}

function noOutline() {
    id_img_but.style.boxShadow = "none"
}

function outline_soco1() {
    button_soco1.style.boxShadow = "0 0 20px red"
}

function noOutline_soco1() {
    button_soco1.style.boxShadow = "0 0 30px black"
}

function outline_soco2() {
    button_soco2.style.boxShadow = "0 0 20px red"
}

function noOutline_soco2() {
    button_soco2.style.boxShadow = "0 0 30px black"
}


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
    audio_mk.play()
}

