window.onload = customCar()
function customCar() {
    var Kokbit = document.getElementById("Kokbit").checked;
    var Kasa = document.getElementById("Kasa").checked;
    var Cam = document.getElementById("Cam").checked;
    var Radyator = document.getElementById("Radyator").checked;
    var ArkaTekerlek = document.getElementById("ArkaTekerlek").checked;
    var OrtaTekerlek = document.getElementById("OrtaTekerlek").checked;
    var OnTekerlek = document.getElementById("OnTekerlek").checked;
    var Camurluk = document.getElementById("Camurluk").checked;
    var kokbit_varligi;
    if (Kokbit) {
        kokbit_varligi = true;
    }
    else {
        kokbit_varligi = false;
    }


    if (!Kokbit) {
        document.getElementById('kokbit-').classList.remove('front');
    }
    else {
        document.getElementById('kokbit-').classList.add('front');
    }


    if (!Kasa) {
        var o = document.getElementsByClassName('rect')[0];
        o.style.width = '0px';
    }
    else {
        var o = document.getElementsByClassName('rect')[0];
        o.style.width = '150px';
    }


    if (Cam && kokbit_varligi) {
        document.getElementById('cam-').classList.add('window');
    }
    else {
        document.getElementById('cam-').classList.remove('window');
    }

     
    if (Radyator && kokbit_varligi) {
        document.getElementById('radyator-').classList.add('f_hood');
    }
    else {
        document.getElementById('radyator-').classList.remove('f_hood');
    }


    if (!ArkaTekerlek) {
        document.getElementById('arkaTekerlek-').classList.remove('tyres');
    }
    else {
        document.getElementById('arkaTekerlek-').classList.add('tyres');
    }


    if (!OrtaTekerlek) {
        document.getElementById('ortaTekerlek-').classList.remove('f_tyres');
    }
    else {
        document.getElementById('ortaTekerlek-').classList.add('f_tyres');
    }


    if (!OnTekerlek) {
        document.getElementById('onTekerlek-').classList.remove('ff_tyres');
    }
    else {
        document.getElementById('onTekerlek-').classList.add('ff_tyres');
    }


    if (!Camurluk) {
        document.getElementById('camurluk-').classList.remove('hood');
    }
    else {
        document.getElementById('camurluk-').classList.add('hood');
    }
}