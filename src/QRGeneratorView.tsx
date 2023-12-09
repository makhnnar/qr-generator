import React, { useState, useRef } from 'react';
import QRGeneratorPresenter from './QRGeneratorPresenter';

const QRGeneratorView = () => {

  const {
    text,
    setText,
    qrCodeUrl,
    setQRCodeUrl,
    inputRef,
    generateQRCode
  } = QRGeneratorPresenter()

  return (
    <div>
      <label>
        Enter text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
      </label>

      <button onClick={generateQRCode}>Generate QR Code</button>

      {qrCodeUrl && (
        <div>
          <p>Generated QR Code:</p>
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
    </div>
  );
};

export default QRGeneratorView;
