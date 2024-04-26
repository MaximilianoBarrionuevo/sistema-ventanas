import { useState } from 'react';

export const useOptions = () => {
    const [tipoSeleccionado, setTipoSeleccionado] = useState('');
    const [tipologiaSeleccionado, setTipologiaSeleccionado] = useState('');
    const [flechaSeleccionado, setFlechaSeleccionado] = useState('');
    const [anchoSeleccionado, setAnchoSeleccionado] = useState('');
    const [altoSeleccionado, setAltoSeleccionado] = useState('');
    const [cantidadSeleccionado, setCantidadSeleccionado] = useState('');
    const [materialMarco, setMaterialMarco] = useState('');
    const [materialHoja, setMaterialHoja] = useState('');
    const [materialContramarcoInterior, setMaterialContramarcoInterior] = useState('');
    const [materialContramarcoExterior, setMaterialContramarcoExterior] = useState('');
    const [materialContravidrio, setMaterialContravidrio] = useState('');
    const [materialMosquitero, setMaterialMosquitero] = useState('');
    const [materialTravesaño, setMaterialTravesaño] = useState('');

    return {
        tipoSeleccionado,
        setTipoSeleccionado,
        tipologiaSeleccionado,
        setTipologiaSeleccionado,
        flechaSeleccionado,
        setFlechaSeleccionado,
        anchoSeleccionado,
        setAnchoSeleccionado,
        altoSeleccionado,
        setAltoSeleccionado,
        cantidadSeleccionado,
        setCantidadSeleccionado,
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
    };
};
