import React from 'react';

const QRCodeDisplay = ({ qrCode, format }) => {
  return (
    <div className="qr-container">
      {qrCode && <img src={qrCode} alt="Generated QR Code" />}
    </div>
  );
};

export default QRCodeDisplay;
