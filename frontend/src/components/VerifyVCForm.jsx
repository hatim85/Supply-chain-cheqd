import { useState } from 'react';
import { verifyVC } from '../Api';

function VerifyVCForm() {
  const [cid, setCid] = useState('');
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
    try {
      const verification = await verifyVC(cid);
      setResult(verification);
    } catch (error) {
      console.error('Error verifying VC:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Verify Verifiable Credential</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="VC CID"
          value={cid}
          onChange={(e) => setCid(e.target.value)}
          className="border p-2"
        />
        <button onClick={handleVerify} className="bg-blue-500 text-white p-2">
          Verify VC
        </button>
      </div>
      {result && (
        <div className="mt-4">
          <p>Valid: {result.isValid ? 'Yes' : 'No'}</p>
          <p>Trusted Issuer: {result.isTrusted ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default VerifyVCForm;