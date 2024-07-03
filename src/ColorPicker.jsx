import React, { useState } from "react";

function ColorPicker({ onColorChange }) {
  const [color, setColor] = useState("#60D9FB");

  function handleColorChange(e) {
    const newColor = e.target.value;
    setColor(newColor);
    onColorChange(newColor);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
