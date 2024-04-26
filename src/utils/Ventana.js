class Ventana {
    constructor(tipo, tipologia, flecha, ancho, alto, cantidad , materialMarco, materialHoja, materialContramarcoInterior, materialContramarcoExterior, materialContravidrio, materialMosquitero, materialTravesaño) {
      this.tipo = tipo;
      this.tipologia = tipologia;
      this.flecha = flecha;
      this.ancho = ancho;
      this.alto = alto;
      this.cantidad = cantidad;
      this.materialMarco = materialMarco;
      this.materialHoja = materialHoja;
      this.materialContramarcoInterior = materialContramarcoInterior;
      this.materialContramarcoExterior = materialContramarcoExterior;
      this.materialContravidrio = materialContravidrio;
      this.materialMosquitero = materialMosquitero;
      this.materialTravesaño = materialTravesaño;
    }
}
  
  export default Ventana;
  

  //si es curva, la medida de corte es la longitud de la curva, sin curvar(+40), la hoja tiene como medida de corte, el mismo valor que el marco sin los +40
  //los agregados siempre tienen el mismo tama;o que la hoja

  //si el tipo es una curva con base sigue lo siguiente,se obtiene el material de la curva como en la curva normal, pero se le agrega la medida de corte del ancho, es decir es el ancho de la ventana+40, asi con todos los agregados
  //los agregados miden lo mismo que la hoja, es decir el ancho sin ningun agregado

