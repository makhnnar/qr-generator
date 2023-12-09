import React, { useState, useRef } from 'react';
import QRCode from 'qrcode';

const QRGeneratorPresenter = () => {
  const [text, setText] = useState<string>('');
  const [qrCodeUrl, setQRCodeUrl] = useState<string>('');
  const inputRef = useRef(null);

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(text);
      setQRCodeUrl(url);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return {
    text,
    setText,
    qrCodeUrl,
    setQRCodeUrl,
    inputRef,
    generateQRCode
  }
};

export default QRGeneratorPresenter;
