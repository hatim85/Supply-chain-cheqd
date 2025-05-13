import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { issueVC } from '../Api';

function IssueVCForm() {
  const [issuerDid, setIssuerDid] = useState('');
  const [subjectDid, setSubjectDid] = useState('');
  const [batchId, setBatchId] = useState('');
  const [product, setProduct] = useState('');
  const navigate = useNavigate();

  const handleIssue = async () => {
    try {
      const credentialData = { batchId, product };
      const result = await issueVC(issuerDid, subjectDid, credentialData);
      alert(`VC Issued! CID: ${result.cid}`);
      navigate('/');
    } catch (error) {
      console.error('Error issuing VC:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Issue Verifiable Credential</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Issuer DID"
          value={issuerDid}
          onChange={(e) => setIssuerDid(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Subject DID"
          value={subjectDid}
          onChange={(e) => setSubjectDid(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Batch ID"
          value={batchId}
          onChange={(e) => setBatchId(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Product Name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="border p-2"
        />
        <button onClick={handleIssue} className="bg-blue-500 text-white p-2">
          Issue VC
        </button>
      </div>
    </div>
  );
}

export default IssueVCForm;