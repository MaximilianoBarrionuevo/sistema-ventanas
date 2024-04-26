 function calcularRadio(ancho, flecha){
    return (Math.pow(flecha, 2) + Math.pow(ancho / 2, 2)) / (2 * flecha);
}

function calcularAngulo(ancho, radio) {
    return 2*Math.asin(ancho/(2*radio))
}

export function calcularLongitudCurva(ancho, flecha) {
    const radio = calcularRadio(ancho, flecha);
    const angulo = calcularAngulo(ancho, radio)

    return Math.round((angulo*radio)+400)
}