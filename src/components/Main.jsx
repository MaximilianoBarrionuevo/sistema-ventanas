import { useEffect, useState } from 'react';
import perfiles from '../db/perfiles';
import colores from '../db/colores';
import tipos from '../db/tipos';
import materiales from '../db/materiales';
import Select from './Select'
import calculateCurvature from '../utils/calculateCurvature';
import Ventana from '../utils/Ventana';
import { useOptions } from '../hooks/useOptions';


const Main = ({mostrarInforme, agregarVentana, eliminarVentana, actualizarNombreTaller, actualizarNombreObra, actualizarColorObra, actualizarFechaObra, actualizarPerfilObra}) => {
  const colorOptions = colores.map(color => color.nombre);
  const marcoOptions = materiales.marcos.map(marco => marco.nombre);
  const hojaOptions = materiales.hojas.map(hoja => hoja.nombre);
  const contramarcoOptions = materiales.contramarcos.map(contramarco => contramarco.nombre);
  const contravidrioOptions = materiales.contravidrios.map(contravidrio => contravidrio.nombre);
  const mosquiteroOptions = materiales.mosquiteros.map(mosquitero => mosquitero.nombre);
  const travesañoOptions = materiales.travesaños.map(travesaño => travesaño.nombre);


  const {
    tipoSeleccionado,
    setTipoSeleccionado,
    tipologiaSeleccionado,
    setTipologiaSeleccionado,
    flechaSeleccionado,
    setFlechaSeleccionado,
    anchoSeleccionado,
    setAnchoSeleccionado,
    altoSeleccionado,
    cantidadSeleccionado,
    setCantidadSeleccionado,
    setAltoSeleccionado,
    materialMarco,
    setMaterialMarco,
    materialHoja,
    setMaterialHoja,
    materialContramarcoInterior,
    setMaterialContramarcoInterior,
    materialContramarcoExterior,
    setMaterialContramarcoExterior,
    materialContravidrio,
    setMaterialContravidrio,
    materialMosquitero,
    setMaterialMosquitero,
    materialTravesaño,
    setMaterialTravesaño,
  } = useOptions();

  useEffect(() => {
    const ventanaForm = document.getElementById('ventanaForm');
    const anchoInput = ventanaForm.querySelector('#ancho');
    const altoInput = ventanaForm.querySelector('#alto');
    const flechaInput = ventanaForm.querySelector('#flecha');

    const handleChange = () => {
      calculateCurvature(anchoInput, altoInput, flechaInput, 'windowDrawing', tipoSeleccionado);
    };

    anchoInput.addEventListener('change', handleChange);
    altoInput.addEventListener('change', handleChange);
    flechaInput.addEventListener('change', handleChange);

    return () => {
      anchoInput.removeEventListener('change', handleChange);
      altoInput.removeEventListener('change', handleChange);
      flechaInput.removeEventListener('change', handleChange);
    };
  }, [tipoSeleccionado]);

  const handleSiguienteVentana = () => {
    const nuevaVentana = new Ventana( 
      tipoSeleccionado,
      tipologiaSeleccionado,
      flechaSeleccionado,
      anchoSeleccionado,
      altoSeleccionado,
      cantidadSeleccionado,
      materialMarco,
      materialHoja,
      materialContramarcoInterior,
      materialContramarcoExterior,
      materialContravidrio,
      materialMosquitero,
      materialTravesaño
    );
    agregarVentana(nuevaVentana);
  };

  const guardarEnLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };

  useEffect(() => {
    const taller = localStorage.getItem('taller');
    if (taller) {
      actualizarNombreTaller(taller);
    }

    const obra = localStorage.getItem('obra');
    if (obra) {
      actualizarNombreObra(obra);
    }

    const color = localStorage.getItem('color');
    if (color) {
      actualizarColorObra(color);
    }

    const fecha = localStorage.getItem('fecha');
    if (fecha) {
      actualizarFechaObra(fecha);
    }

    const perfil = localStorage.getItem('perfil');
    if (perfil) {
      actualizarPerfilObra(perfil);
    }
  }, []);


  return (
    <>
      <main className="contendor-main">
        <div className="contenedor-izquierdo">
          <form id="obraForm">
            <legend>OBRA</legend>
            <label htmlFor="taller">Taller:</label>
            <input type="text" id="taller" value={localStorage.getItem('taller') || ''} onChange={(e) => { actualizarNombreTaller(e.target.value); guardarEnLocalStorage('taller', e.target.value); }} required />

            <label htmlFor="obra">Obra:</label>
            <input type="text" id="obra" value={localStorage.getItem('obra') || ''} onChange={(e) =>{ actualizarNombreObra(e.target.value); guardarEnLocalStorage('obra', e.target.value)}} required />

            <div className="contenedor-doble-columna">
              <div className="input-doble">
                <label htmlFor="color">Color:</label>
                <Select options={colorOptions} value={localStorage.getItem('color') || ''} onChange={(e) => { actualizarColorObra(e.target.value); guardarEnLocalStorage('color', e.target.value)}} />
              </div>

              <div className="input-doble">
                <label htmlFor="fecha">Fecha:</label>
                <input type="date" id="fecha" value={localStorage.getItem('fecha') || ''} onChange={(e) => { actualizarFechaObra(e.target.value); guardarEnLocalStorage('fecha', e.target.value)}} required />
              </div>
            </div>
            
            <label htmlFor="perfil">Perfil:</label>
            <Select options={perfiles} value={localStorage.getItem('perfil') || ''} onChange={(e) => { actualizarPerfilObra(e.target.value); guardarEnLocalStorage('perfil', e.target.value)}} required/>
          </form>

          <form id="ventanaForm">
            <legend>Ventana</legend>
            <label htmlFor="tipo">Tipo:</label>
            <Select id="tipo" options={tipos} onChange={(e) => setTipoSeleccionado(e.target.value)} />
            <div className="contenedor-doble-columna">
              <div className="input-doble">
                <label htmlFor="tipologia">Tipologia:</label>
                <input type="text" id="tipologia" onChange={(e) => setTipologiaSeleccionado(e.target.value)} required />
              </div>
              <div className="input-doble">
                <label htmlFor="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" onChange={(e) => setCantidadSeleccionado(e.target.value)} required />
              </div>
            </div>

            <label htmlFor="flecha">Flecha:</label>
            <input type="number" id="flecha" required value={flechaSeleccionado} onChange={(e) => setFlechaSeleccionado(e.target.value)} />

            <label htmlFor="ancho">Ancho:</label>
            <input type="number" id="ancho" required value={anchoSeleccionado} onChange={(e) => setAnchoSeleccionado(e.target.value)} />
            
            <label htmlFor="alto">Alto:</label>
            <input type="number" id="alto" required value={tipoSeleccionado !== "Capilla" ? 0 : altoSeleccionado} onChange={(e) => setAltoSeleccionado(e.target.value)} />

            <div className='contenedor-botones doble'>
              <button id="siguienteVentanaBtn" type="button" onClick={handleSiguienteVentana}>Siguiente Ventana</button>
              <button>Finalizar Obra</button>
            </div>
          </form>
        </div>
        <div className="contenedor-derecho">
          <div className="contenedor-imagen">
            <div id="windowDrawing"></div>
          </div>
          <form id='materialesForm' action="">
            <legend>Materiales</legend>
            <div className="contenedor-materiales">
              <Select options={marcoOptions} value={materialMarco} onChange={(e) => setMaterialMarco(e.target.value)} />
              <Select options={hojaOptions} value={materialHoja} onChange={(e) => setMaterialHoja(e.target.value)} />
              <Select options={contramarcoOptions} value={materialContramarcoInterior} onChange={(e) => setMaterialContramarcoInterior(e.target.value)} />
              <Select options={contramarcoOptions} value={materialContramarcoExterior} onChange={(e) => setMaterialContramarcoExterior(e.target.value)} />
              <Select options={contravidrioOptions} value={materialContravidrio} onChange={(e) => setMaterialContravidrio(e.target.value)} />
              <Select options={mosquiteroOptions} value={materialMosquitero} onChange={(e) => setMaterialMosquitero(e.target.value)} />
              <Select options={travesañoOptions} value={materialTravesaño} onChange={(e) => setMaterialTravesaño(e.target.value)} />
              <div className="contenedor-botones">
                <button onClick={mostrarInforme}>Ir a informe</button>
                <button id="borrarUltimaVentanaBtn" type="button" onClick={eliminarVentana}>Borrar ultima ventana</button>
                <button>Borrar Obra</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Main;