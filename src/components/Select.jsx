import React from 'react';

const Select = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Elegir</option> {/* Opción predeterminada */}
      {options.map((option, index) => (
        <option key={index} value={option.nombre || option}>{option.nombre || option}</option>
      ))}
    </select>
  );
};

export default Select;

