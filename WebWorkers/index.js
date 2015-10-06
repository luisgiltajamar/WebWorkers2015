var worker;

function lanzarWorker() {
    worker = new Worker("temporizador.js");
    worker.onmessage = function (evt) {

        document.getElementById("segundos").innerHTML = evt.data;

        if (evt.data == "0") {
            location.reload();
        }
    }
}
function parar() {
    worker.terminate();
    worker = undefined;
}
function reiniciar() {
    if (worker == undefined)
        lanzarWorker();
    else
        worker.postMessage("reiniciar");
}
lanzarWorker();
document.getElementById("reiniciar").addEventListener("click",reiniciar);
document.getElementById("stop").addEventListener("click",parar);