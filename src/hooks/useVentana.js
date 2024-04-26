import { useState } from 'react';

export const useVentana = () => {
    // Obtener la lista de ventanas del localStorage al iniciar
    const listaVentanasGuardada = JSON.parse(localStorage.getItem('listaVentanas'));
    const [listaVentanas, setListaVentanas] = useState(listaVentanasGuardada || []);

    const agregarVentana = (nuevaVentana) => {
        const nuevaLista = [...listaVentanas, nuevaVentana];
        // Guardar la lista actualizada en el localStorage
        localStorage.setItem('listaVentanas', JSON.stringify(nuevaLista));
        setListaVentanas(nuevaLista);
    }

    const eliminarVentana = () => {
        const listaNueva = [...listaVentanas];
        listaNueva.pop();
        // Guardar la lista actualizada en el localStorage
        localStorage.setItem('listaVentanas', JSON.stringify(listaNueva));
        setListaVentanas(listaNueva);
    }

    return {
        listaVentanas,
        agregarVentana,
        eliminarVentana
    };
}
