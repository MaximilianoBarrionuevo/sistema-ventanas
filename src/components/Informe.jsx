import React, { useEffect, useState } from 'react';
import InformeMateriales from './InformeMateriales'
import { generarSVG } from '../utils/generarSVG';

const Informe = ({ listaVentanas, nombreTaller, nombreObra, colorObra, fechaObra, perfilObra }) => {
  const [svgElements, setSvgElements] = useState([]);

  useEffect(() => {
    const svgs = listaVentanas.map((ventana, index) => {
      const anchoNumerico = parseFloat(ventana.ancho);
      const altoNumerico = parseFloat(ventana.alto);
      const flechaNumerico = parseFloat(ventana.flecha);
  
      // Verificar si alguno de los valores es NaN y asignarle un valor predeterminado de 0
      const ancho = isNaN(anchoNumerico) ? 0 : anchoNumerico;
      const alto = isNaN(altoNumerico) ? 0 : altoNumerico;
      const flecha = isNaN(flechaNumerico) ? 0 : flechaNumerico;
  
      const svgElement = generarSVG(ancho / 6, alto / 6, flecha / 6, ventana.tipo);
      return svgElement;
    });

    setSvgElements(svgs);
  }, [listaVentanas]);

  return (
    <div>
      <h1>Informe</h1>
      <button className='boton' onClick={ () => window.print()}>Imprimir</button>
      <div id="ventanas-container">
        {listaVentanas.map((ventana, index) => (
          <div key={index} className="ventana">
            <div className='tabla-obra'>
              <h2>HOJA DE CORTE</h2>
              <table className='tabla'>
                <tbody>
                    <tr>
                      <th>Taller</th>
                      <th>Obra</th>
                      <th>Fecha</th>
                      <th>Color</th>
                      <th>Perfil</th>
                    </tr>
                    <tr>
                      <td>{nombreTaller}</td>
                      <td>{nombreObra}</td>
                      <td>{fechaObra}</td>
                      <td>{colorObra}</td>
                      <td>{perfilObra}</td>
                    </tr>
                </tbody>
              </table>
            </div>
             <div className='ventana-referencia'>
              <div className="svg-element">
                {svgElements[index] && <div dangerouslySetInnerHTML={{ __html: svgElements[index] }} />}
              </div>
              <table className='tabla'>
                <tbody>
                  <tr>
                    <th>Tipologia</th>
                    <th>Cantidad</th>
                    <th>Tipo</th>
                    <th>Medidas</th>
                  </tr>
                  <tr>
                    <td>{ventana.tipologia}</td>
                    <td>{ventana.cantidad}</td>
                    <td>{ventana.tipo}</td>
                    <td>{ventana.ancho}x{ventana.flecha}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <InformeMateriales
              tipo={ventana.tipo}
              ventana={ventana}
              colorObra={colorObra}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Informe;