var segundos = 60;

function bajar() {
    segundos--;

    postMessage(segundos);

    setTimeout("bajar()", 1000);
}
self.onmessage = function (evt) {

    if(evt.data=="reiniciar")
        segundos = 60;

}

bajar();


