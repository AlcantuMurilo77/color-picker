import React, { useState } from 'react';
import './index.css';

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">🎨 Color Picker</h1>

        <div
          className="w-full h-32 rounded-xl mb-4 border-2"
          style={{ backgroundColor: color }}
        />

        <p className="text-sm text-gray-600 mb-4">
          Selected Color: <span className="font-medium text-gray-800">{color}</span>
        </p>

        <label className="block text-gray-700 font-medium mb-2">Choose a color:</label>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-20 h-10 cursor-pointer border-none bg-transparent"
        />
      </div>
    </div>
  );
}

export default ColorPicker;
