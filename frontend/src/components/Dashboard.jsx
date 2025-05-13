import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createDID } from '../Api';

function Dashboard() {
  const [issuerIdentifier, setIssuerIdentifier] = useState('');
  const [subjectIdentifier, setSubjectIdentifier] = useState('');
  const [did, setDid] = useState(null);

  const handleCreateDID = async () => {
    try {
      const result = await createDID(issuerIdentifier, subjectIdentifier);
      console.log('DID created:', result);
      setDid(result);
    } catch (error) {
      console.error('Error creating DID:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Dashboard</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter identifier (e.g., manufacturer123)"
          value={issuerIdentifier}
          onChange={(e) => setIssuerIdentifier(e.target.value)}
          className="border p-2 mr-2"
        />
          <input
            type="text"
            value={subjectIdentifier}
            onChange={(e) => setSubjectIdentifier(e.target.value)}
            placeholder="Enter subject identifier"
            className='border p-2 mr-2'
          />
        <button onClick={handleCreateDID} className="bg-blue-500 text-white p-2">
          Create DID
        </button>
      </div>
      {did && (
        <p className="mb-4">Created DID: {did.did}</p>
      )}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/issue-vc" className="bg-green-500 text-white p-4 text-center">
          Issue VC
        </Link>
        <Link to="/verify-vc" className="bg-yellow-500 text-white p-4 text-center">
          Verify VC
        </Link>
        <Link to="/scan-qr" className="bg-purple-500 text-white p-4 text-center">
          Scan QR Code
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;