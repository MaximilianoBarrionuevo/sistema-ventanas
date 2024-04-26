import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Informe from './components/Informe';
import { useVentana } from './hooks/useVentana';
import { useOptions } from './hooks/useOptions';
import useDatos from './hooks/useDatos';

function App() {
  const [mostrarInforme, setMostrarInforme] = useState(false);
  const {listaVentanas, agregarVentana, eliminarVentana} = useVentana()
  const {nombreTaller, nombreObra, colorObra, fechaObra, perfilObra, actualizarNombreTaller, actualizarNombreObra, actualizarColorObra, actualizarFechaObra, actualizarPerfilObra} = useDatos()
  
  const toggleInforme = () => {
    setMostrarInforme(!mostrarInforme);
  };

  return (
    <>
      <Header />
      {mostrarInforme ? 
        <Informe listaVentanas={listaVentanas} nombreTaller={nombreTaller} nombreObra={nombreObra} colorObra={colorObra} fechaObra={fechaObra} perfilObra={perfilObra} /> 
          : 
        <Main mostrarInforme={toggleInforme} agregarVentana={agregarVentana} eliminarVentana={eliminarVentana} useOptions={useOptions} actualizarNombreTaller={actualizarNombreTaller} actualizarNombreObra={actualizarNombreObra} actualizarColorObra={actualizarColorObra} actualizarFechaObra={actualizarFechaObra} actualizarPerfilObra={actualizarPerfilObra}/>
      } 
    </>
  );
}

export default App;
