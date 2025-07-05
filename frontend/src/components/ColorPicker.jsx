import React from 'react';

const colorHexCodes = {
  yellow: '#E6CA97', 
  white: '#D9D9D9', 
  rose: '#E1A4A9', 
};

const ColorPicker = ({ availableColors, selectedColor, onColorChange }) => {
  return (
    <div>
      {Object.keys(availableColors).map((color) => (
        <button
          key={color}
          onClick={() => onColorChange(color)}
          style={{
            backgroundColor: colorHexCodes[color],
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: selectedColor === color ? '2px solid #333' : '1px solid #ccc',
            margin: '5px',
            cursor: 'pointer',
          }}
          aria-label={`Select ${color} color`}
        />
      ))}
      <p style={{ textTransform: 'capitalize', fontSize: '14px', color: '#555' }}>
        {selectedColor} Gold
      </p>
    </div>
  );
};

export default ColorPicker;