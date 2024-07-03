//react hook (useState)
//onchange event
import React, { useState , useEffect } from 'react';
import './App.css';
import Counter from './counter';
import MyComponent from './mycomponent';
import ColorPicker from './ColorPicker';

function App() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmp, setIsEmp] = useState(false);
  const [visibleComponent, setVisibleComponent] = useState("Form");
  const [color, setColor] = useState("#60D9FB");

  const updateN = () => {
    setName(prompt("Enter Name: "));
  };

  const updateA = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmp(!isEmp);
  };

  const toggleVisibility = (componentName) => {
    setVisibleComponent(componentName);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  const hexToHSL = (H) => {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length === 4) {
      r = parseInt(H[1] + H[1], 16);
      g = parseInt(H[2] + H[2], 16);
      b = parseInt(H[3] + H[3], 16);
    } else if (H.length === 7) {
      r = parseInt(H[1] + H[2], 16);
      g = parseInt(H[3] + H[4], 16);
      b = parseInt(H[5] + H[6], 16);
    }
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);
    return [h, s, l];
  };
  useEffect(() => {
    const [h, s, l] = hexToHSL(color);
    document.documentElement.style.setProperty('--base-color-hue', h);
    document.documentElement.style.setProperty('--base-color-saturation', `${s}%`);
    document.documentElement.style.setProperty('--base-color-lightness', `${l}%`);
  }, [color]);

  return (
    <>
      <header>
        <ul>
          <li onClick={() => toggleVisibility("Form")}>Form</li><hr />
          <li onClick={() => toggleVisibility("Component")}>Component</li><hr />
          <li onClick={() => toggleVisibility("ColorPicker")}>Color Picker</li>
        </ul>
      </header>
      {visibleComponent === "Form" && (
        <div className='formulaire'>
          <p><span className='label'>Name:</span> {name}</p>
          <button onClick={updateN}>Set Name</button>

          <p><span className='label'>Age:</span> {age}</p>
          <button onClick={updateA}>Increment Age</button>

          <p><span className='label'>isEmployed:</span> {isEmp ? "Yes" : "No"}</p>
          <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
      )}
      {visibleComponent === "Component" && <MyComponent />}
      {visibleComponent === "ColorPicker" && <ColorPicker onColorChange={handleColorChange}/>}
    </>
  );
}

export default App;