import React from 'react';

const QRCodeDisplay = ({ qrCode, format }) => {
  return (
    <div className="qr-container">
      {qrCode && <img src={qrCode} alt="Generated QR Code" />}
      {qrCode && <a href={qrCode} download={`QRCode.${format}`}>Download</a>}
    </div>
  );
};

export default QRCodeDisplay;
