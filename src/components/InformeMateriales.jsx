import materiales from "../db/materiales";
import { calcularLongitudCurva } from '../utils/medidasDeCorte';

const InformeMateriales = ({ tipo, ventana, colorObra }) => {
    function obtenerCodigo(nombreMaterial) {
        // Busca el material por su nombre en el objeto de materiales
        const materialEncontrado = materiales.marcos.find(material => material.nombre === nombreMaterial)
            || materiales.hojas.find(material => material.nombre === nombreMaterial)
            || materiales.contramarcos.find(material => material.nombre === nombreMaterial)
            || materiales.contravidrios.find(material => material.nombre === nombreMaterial)
            || materiales.mosquiteros.find(material => material.nombre === nombreMaterial)
            || materiales.travesaños.find(material => material.nombre === nombreMaterial);

        // Retorna el código si se encuentra el material, de lo contrario, retorna un código de error
        return materialEncontrado ? materialEncontrado.codigo : 'Material no encontrado';
    }
    if (tipo === "Curva") {
        return (
            <table className='tabla'>
                <tbody>
                    <tr>
                        <th>Codigo</th>
                        <th>Color</th>
                        <th>Descripcion</th>
                        <th>Ud</th>
                        <th>L. Corte</th>
                        <th>Angulo</th>
                    </tr>
                    <tr>
                        <td>{obtenerCodigo(ventana.materialMarco)}</td>
                        <td>{colorObra}</td>
                        <td>{ventana.materialMarco}</td>
                        <td>{1 * ventana.cantidad}</td>
                        <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha)}</td>
                        <td>45°</td>
                    </tr>
                    {/* Condición para Hoja */}
                    {ventana.materialHoja !== null && ventana.materialHoja !== "Elegir" && ventana.materialHoja !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialHoja)}</td>
                            <td>{colorObra}</td>
                            <td>{ventana.materialHoja}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha) - 80}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Remate Interior */}
                    {ventana.materialContramarcoInterior !== null && ventana.materialContramarcoInterior !== "Elegir" && ventana.materialContramarcoInterior !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialContramarcoInterior)}</td>
                            <td>{colorObra}</td>
                            <td>{ventana.materialContramarcoInterior}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha)}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Remate Exterior */}
                    {ventana.materialContramarcoExterior !== null && ventana.materialContramarcoExterior !== "Elegir" && ventana.materialContramarcoExterior !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialContramarcoExterior)}</td>
                            <td>{colorObra}</td>
                            <td>{ventana.materialContramarcoExterior}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha)}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Contravidrio */}
                    {ventana.materialContravidrio !== null && ventana.materialContravidrio !== "Elegir" && ventana.materialContravidrio !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialContravidrio)}</td>
                            <td>{colorObra}</td>
                            <td>{ventana.materialContravidrio}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha) - 80}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Mosquitero */}
                    {ventana.materialMosquitero !== null && ventana.materialMosquitero !== "Elegir" && ventana.materialMosquitero !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialMosquitero)}</td>
                            <td>{colorObra}</td>
                            <td>{ventana.materialMosquitero}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha) - 80}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Travesaño */}
                    {ventana.materialTravesaño !== null && ventana.materialTravesaño !== "Elegir" && ventana.materialTravesaño !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialTravesaño)}</td>
                            <td>{colorObra}</td>
                            <td>{ventana.materialTravesaño}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha)}</td>
                            <td>45°</td>
                        </tr>
                    }
                </tbody>
            </table>
        )
    }

    if (tipo === "Curva con base" || "Capilla") {
        return (
            <table className='tabla'>
                <tbody>
                    <tr>
                        <th>Codigo</th>
                        <th>Color</th>
                        <th>Descripcion</th>
                        <th>Ud</th>
                        <th>L. Corte</th>
                        <th>Angulo</th>
                    </tr>
                    <tr>
                        <td>{obtenerCodigo(ventana.materialMarco)}</td>
                        <td>{colorObra}</td>
                        <td>Curva:{ventana.materialMarco}</td>
                        <td>{1 * ventana.cantidad}</td>
                        <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha)}</td>
                        <td>45°</td>
                    </tr>
                    {/* Condición para Hoja */}
                    {ventana.materialHoja !== null && ventana.materialHoja !== "Elegir" && ventana.materialHoja !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialHoja)}</td>
                            <td>{colorObra}</td>
                            <td>Curva:{ventana.materialHoja}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha) - 80}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Remate Interior */}
                    {ventana.materialContramarcoInterior !== null && ventana.materialContramarcoInterior !== "Elegir" && ventana.materialContramarcoInterior !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialContramarcoInterior)}</td>
                            <td>{colorObra}</td>
                            <td>Curva:{ventana.materialContramarcoInterior}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha)}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Remate Exterior */}
                    {ventana.materialContramarcoExterior !== null && ventana.materialContramarcoExterior !== "Elegir" && ventana.materialContramarcoExterior !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialContramarcoExterior)}</td>
                            <td>{colorObra}</td>
                            <td>Curva:{ventana.materialContramarcoExterior}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha)}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Contravidrio */}
                    {ventana.materialContravidrio !== null && ventana.materialContravidrio !== "Elegir" && ventana.materialContravidrio !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialContravidrio)}</td>
                            <td>{colorObra}</td>
                            <td>Curva:{ventana.materialContravidrio}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha) - 80}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Mosquitero*/}
                    {ventana.materialMosquitero !== null && ventana.materialMosquitero !== "Elegir" && ventana.materialMosquitero !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialMosquitero)}</td>
                            <td>{colorObra}</td>
                            <td>Curva:{ventana.materialMosquitero}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha) - 80}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Travesaño */}
                    {ventana.materialTravesaño !== null && ventana.materialTravesaño !== "Elegir" && ventana.materialTravesaño !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialTravesaño)}</td>
                            <td>{colorObra}</td>
                            <td>Curva:{ventana.materialTravesaño}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{calcularLongitudCurva(ventana.ancho, ventana.flecha)}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Materiales para la base */}
                    <tr>
                        <td>{obtenerCodigo(ventana.materialMarco)}</td>
                        <td>{colorObra}</td>
                        <td>Base:{ventana.materialMarco}</td>
                        <td>{1 * ventana.cantidad}</td>
                        <td>{parseInt(ventana.ancho) + 40}</td>
                        <td>45°</td>
                    </tr>
                    {/* Condición para Hoja Base*/}
                    {ventana.materialHoja !== null && ventana.materialHoja !== "Elegir" && ventana.materialHoja !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialHoja)}</td>
                            <td>{colorObra}</td>
                            <td>Base:{ventana.materialHoja}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{ventana.ancho - 40}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Remate Interior Base*/}
                    {ventana.materialContramarcoInterior !== null && ventana.materialContramarcoInterior !== "Elegir" && ventana.materialContramarcoInterior !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialContramarcoInterior)}</td>
                            <td>{colorObra}</td>
                            <td>Base:{ventana.materialContramarcoInterior}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{ventana.ancho - 40}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Remate Exterior Base*/}
                    {ventana.materialContramarcoExterior !== null && ventana.materialContramarcoExterior !== "Elegir" && ventana.materialContramarcoExterior !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialContramarcoExterior)}</td>
                            <td>{colorObra}</td>
                            <td>Base:{ventana.materialContramarcoExterior}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{ventana.ancho - 40}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Contravidrio Base*/}
                    {ventana.materialContravidrio !== null && ventana.materialContravidrio !== "Elegir" && ventana.materialContravidrio !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialContravidrio)}</td>
                            <td>{colorObra}</td>
                            <td>Base:{ventana.materialContravidrio}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{ventana.ancho - 40}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Mosquitero Base*/}
                    {ventana.materialMosquitero !== null && ventana.materialMosquitero !== "Elegir" && ventana.materialMosquitero !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialMosquitero)}</td>
                            <td>{colorObra}</td>
                            <td>Base:{ventana.materialMosquitero}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{ventana.ancho - 40}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {/* Condición para Travesaño Base*/}
                    {ventana.materialTravesaño !== null && ventana.materialTravesaño !== "Elegir" && ventana.materialTravesaño !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialTravesaño)}</td>
                            <td>{colorObra}</td>
                            <td>Base:{ventana.materialTravesaño}</td>
                            <td>{1 * ventana.cantidad}</td>
                            <td>{ventana.ancho - 40}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {tipo === "Capilla" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialMarco)}</td>
                            <td>{colorObra}</td>
                            <td>Altos:{ventana.materialMarco}</td>
                            <td>{2 * ventana.cantidad}</td>
                            <td>{parseInt(ventana.alto) + 40}</td>
                            <td>45°</td>
                        </tr>
                    }
                    {tipo === "Capilla" && ventana.materialHoja !== null && ventana.materialHoja !== "Elegir" && ventana.materialHoja !== "" &&
                        <tr>
                            <td>{obtenerCodigo(ventana.materialHoja)}</td>
                            <td>{colorObra}</td>
                            <td>Altos:{ventana.materialHoja}</td>
                            <td>{2 * ventana.cantidad}</td>
                            <td>{ventana.alto - 40}</td>
                            <td>45°</td>
                        </tr>
                    }
                </tbody>
            </table>
        )
    }
}

export default InformeMateriales;