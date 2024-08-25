
const areaTextoUsuario = document.getElementById("areaTextoUsuario");
const botonEncriptar = document.getElementById("botoEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const textoEncriptadoResultado = document.getElementById("texto-resultado");
const textoInstruccionesResultado = document.getElementById("texto-instrucciones-resultado");
const botonCopiar = document.getElementById("boton-copiar");
const imagenMuneco = document.getElementById("imagen-muneco");

let textoUsuario = "";

function textoIngresado() {

    textoUsuario = areaTextoUsuario.value;

    if (textoUsuario.length > 0) {
        botonEncriptar.disabled = false;
        botonDesencriptar.disabled = false;
    } else {
        botonEncriptar.disabled = true;
        botonDesencriptar.disabled = true;
    }

    reiniciarResultados();
}

function encriptarTexto() {
    let textoEncriptado = "";

    textoEncriptado = textoUsuario.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

    mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
    let textoOriginal = "";

    textoOriginal = textoUsuario.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

    mostrarResultado(textoOriginal);
}

function mostrarResultado(textoResultado) {

    imagenMuneco.hidden = true;
    textoInstruccionesResultado.hidden = true;
    textoEncriptadoResultado.style.fontWeight = 400;
    textoEncriptadoResultado.innerHTML = textoResultado;
    botonCopiar.hidden = false;
}

function reiniciarResultados() {
    const textoSinMensaje = "Ningun mensaje fue encontrado.";

    imagenMuneco.hidden = false;
    textoInstruccionesResultado.hidden = false;
    textoEncriptadoResultado.style.fontWeight = 600;
    textoEncriptadoResultado.innerHTML = textoSinMensaje;
    botonCopiar.hidden = true;
}

function copiarTexto() {
    navigator.clipboard.writeText(textoEncriptadoResultado.innerHTML);
}