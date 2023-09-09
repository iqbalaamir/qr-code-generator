import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import QRCodeDisplay from './components/QRCodeDisplay';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [data, setData] = useState('');
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [format, setFormat] = useState('png');
  const [color, setColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${width}x${height}&format=${format}&color=${color.replace('#', '')}&bgcolor=${bgColor.replace('#', '')}`, {
        responseType: 'blob'
      });
      const blob = new Blob([response.data], { type: `image/${format}` });
      const url = URL.createObjectURL(blob);
      setQrCode(url);
    } catch (error) {
      console.error("Error generating QR code: ", error);
    }
  };


  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="container">
        <Form
          data={data}
          width={width}
          height={height}
          format={format}
          color={color}
          bgColor={bgColor}
          qrCode={qrCode}
          setData={setData}
          setWidth={setWidth}
          setHeight={setHeight}
          setFormat={setFormat}
          setColor={setColor}
          setBgColor={setBgColor}
          generateQRCode={generateQRCode}
        />

        <QRCodeDisplay qrCode={qrCode} format={format} />
      </div>
    </div>
  );
}

export default App;
