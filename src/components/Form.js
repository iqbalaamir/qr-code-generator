import React from 'react';

const Form = ({ data, width, height, format, color, bgColor, setData, setWidth, setHeight, setFormat, setColor, setBgColor, generateQRCode }) => {
  return (
    <div className="form-container">
      <input type="text" placeholder="Data" value={data} onChange={(e) => setData(e.target.value)} />
      <input type="number" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
      <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
      <select onChange={(e) => setFormat(e.target.value)}>
        <option value="png">PNG</option>
        <option value="jpg">JPG</option>
        <option value="svg">SVG</option>
      </select>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      <button onClick={generateQRCode}>Generate</button>
    </div>
  );
};

export default Form;
