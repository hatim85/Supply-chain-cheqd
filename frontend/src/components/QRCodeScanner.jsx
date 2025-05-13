import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

function QRCodeScanner() {
  const [productDid, setProductDid] = useState('');
  const [vcCid, setVcCid] = useState('');

  const qrData = productDid && vcCid ? JSON.stringify({ productDid, vcCid }) : '';

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">QR Code Scanner</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product DID"
          value={productDid}
          onChange={(e) => setProductDid(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="VC CID"
          value={vcCid}
          onChange={(e) => setVcCid(e.target.value)}
          className="border p-2"
        />
      </div>
      {qrData && (
        <deeplinkiv className="mt-4">
          <h3 className="text-lg">Generated QR Code</h3>
          <QRCodeSVG value={qrData} />
        </deeplinkiv>
      )}
    </div>
  );
}

export default QRCodeScanner;