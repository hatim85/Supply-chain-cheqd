// import { useState } from 'react';
// import { verifyVC } from '../Api';

// function VerifyVCForm() {
//   const [cid, setCid] = useState('');
//   const [result, setResult] = useState(null);

//   const handleVerify = async () => {
//     try {
//       const verification = await verifyVC(cid);
//       setResult(verification);
//     } catch (error) {
//       console.error('Error verifying VC:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl mb-4">Verify Verifiable Credential</h2>
//       <div className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="VC CID"
//           value={cid}
//           onChange={(e) => setCid(e.target.value)}
//           className="border p-2"
//         />
//         <button onClick={handleVerify} className="bg-blue-500 text-white p-2">
//           Verify VC
//         </button>
//       </div>
//       {result && (
//         <div className="mt-4">
//           <p>Valid: {result.isValid ? 'Yes' : 'No'}</p>
//           <p>Trusted Issuer: {result.isTrusted ? 'Yes' : 'No'}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default VerifyVCForm;






import { useState } from 'react';
import { verifyVC } from '../Api';

function VerifyVCForm() {
    const [id, setId] = useState('');
    const [policies, setPolicies] = useState({
        issuanceDate: true,
        expirationDate: true,
        audience: false
    });
    const [options, setOptions] = useState({
        verifyStatus: false,
        fetchRemoteContexts: false,
        allowDeactivatedDid: false
    });
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handlePolicyChange = (policy) => {
        setPolicies((prev) => ({ ...prev, [policy]: !prev[policy] }));
    };

    const handleOptionChange = (option) => {
        setOptions((prev) => ({ ...prev, [option]: !prev[option] }));
    };

    const handleVerify = async () => {
        setResult(null);
        setError(null);

        // Validate ID
        if (!id.trim()) {
            setError('Please enter a valid MongoDB ID');
            return;
        }

        setIsLoading(true);
        try {
            const verification = await verifyVC(id, policies, options);
            setResult(verification);
        } catch (error) {
            console.error('Error verifying VC:', error);
            setError(error.message || 'Failed to verify VC. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Verify Verifiable Credential</h2>
            <div className="flex flex-col gap-4">
                <label htmlFor="id-input" className="text-sm font-medium">
                    VC MongoDB ID
                </label>
                <input
                    id="id-input"
                    type="text"
                    placeholder="Enter VC MongoDB ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-required="true"
                    disabled={isLoading}
                />

                <fieldset className="mt-4">
                    <legend className="text-sm font-medium mb-2">Verification Policies</legend>
                    {['issuanceDate', 'expirationDate', 'audience'].map((policy) => (
                        <label key={policy} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={policies[policy]}
                                onChange={() => handlePolicyChange(policy)}
                                disabled={isLoading}
                            />
                            {policy.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                        </label>
                    ))}
                </fieldset>

                <fieldset className="mt-4">
                    <legend className="text-sm font-medium mb-2">Verification Options</legend>
                    {['verifyStatus', 'fetchRemoteContexts', 'allowDeactivatedDid'].map((option) => (
                        <label key={option} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={options[option]}
                                onChange={() => handleOptionChange(option)}
                                disabled={isLoading}
                            />
                            {option.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                        </label>
                    ))}
                </fieldset>

                <button
                    onClick={handleVerify}
                    disabled={isLoading}
                    className={`p-2 text-white rounded ${
                        isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                >
                    {isLoading ? 'Verifying...' : 'Verify VC'}
                </button>
            </div>

            {error && (
                <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            {result && (
                <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
                    <p>Verified: {result.verified ? 'Yes' : 'No'}</p>
                    <p>Trusted Issuer: {result.isTrusted ? 'Yes' : 'No'}</p>
                    {result.issuer && <p>Issuer: {result.issuer}</p>}
                    {result.signer && (
                        <p>
                            Signer: {result.signer.id} ({result.signer.type})
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default VerifyVCForm;