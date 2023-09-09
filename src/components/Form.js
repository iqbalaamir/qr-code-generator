import React from 'react';

const Form = ({ data, width, height, format, color, bgColor, qrCode, setData, setWidth, setHeight, setFormat, setColor, setBgColor, generateQRCode }) => {
  return (
    <div className="form-container animated-form">
      <h2><i className="fa fa-cog"></i> QR Code Settings</h2>
      <div className="form-group">
        <label><i className="fa fa-pencil"></i> Data:</label>
        <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      </div>
      <div className="form-group d-flex">
        <label><i className="fa fa-arrows-h"></i> Width:</label>
        <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
        <label><i className="fa fa-arrows-v"></i> Height:</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div className="form-group">
        <label><i className="fa fa-file-image-o"></i> Format:</label>
        <select onChange={(e) => setFormat(e.target.value)}>
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
          <option value="svg">SVG</option>
        </select>
      </div>
      <div className="form-group d-flex">
        <label><i className="fa fa-paint-brush"></i> Color:</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <label><i className="fa fa-paint-roller"></i> Background Color:</label>
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      </div>
      <button onClick={generateQRCode}><i className="fa fa-magic"></i> Generate</button>
      {qrCode && <a href={qrCode} download={`QRCode.${format}`}><button><i className="fa fa-download"></i> Download</button></a>}
    </div>
  );
};

export default Form;
