import { useState } from 'react';

function useDatos() {
  const [nombreTaller, setNombreTaller] = useState('');
  const [nombreObra, setNombreObra] = useState('');
  const [colorObra, setColorObra] = useState('');
  const [fechaObra, setFechaObra] = useState('');
  const [perfilObra, setPerfilObra] = useState('')

  // Funciones para actualizar los datos
  const actualizarNombreTaller = (nombre) => {
    setNombreTaller(nombre);
  };

  const actualizarNombreObra = (nombre) => {
    setNombreObra(nombre);
  };

  const actualizarColorObra = (color) => {
    setColorObra(color);
  };

  const actualizarFechaObra = (fecha) => {
    setFechaObra(fecha);
  };

  const actualizarPerfilObra = (perfil) => {
    setPerfilObra(perfil);
  }

  // Devuelve los datos y las funciones para actualizarlos
  return {
    nombreTaller,
    nombreObra,
    colorObra,
    fechaObra,
    perfilObra,
    actualizarNombreTaller,
    actualizarNombreObra,
    actualizarColorObra,
    actualizarFechaObra,
    actualizarPerfilObra
  };
}

export default useDatos;