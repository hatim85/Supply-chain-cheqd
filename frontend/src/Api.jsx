import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const createDID = async (issuerIdentifier,subjectIdentifier) => {
  const response = await axios.post(`${API_URL}/did/create`, { issuerIdentifier,subjectIdentifier });
  return response.data;
};

export const issueVC = async (issuerDid, subjectDid, credentialData) => {
  const response = await axios.post(`${API_URL}/vc/issue`, { issuerDid, subjectDid, credentialData });
  return response.data;
};

// export const verifyVC = async (cid) => {
//     console.log('Verifying VC with CID frontend:', cid);
//     try{
//   const response = await axios.post(`${API_URL}/vc/verify`, { cid },{
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
//                     // 'x-api-key': process.env.API_KEY
//                 }
//             });
//   return response.data;
//     }
//     catch (error) {
//         console.error('Error verifying VC:', error);
//         throw error;
//     }
// };



export const verifyVC = async (id, policies = {}, options = {}) => {
    console.log('Verifying VC with MongoDB ID frontend:', { id, policies, options });

    // Validate ID
    if (!id || typeof id !== 'string' || !id.trim()) {
        console.error('Invalid MongoDB ID provided');
        throw new Error('Invalid ID: Please provide a valid MongoDB ID');
    }

    // Validate policies
    const validPolicies = ['issuanceDate', 'expirationDate', 'audience'];
    const filteredPolicies = Object.keys(policies).reduce((acc, key) => {
        if (validPolicies.includes(key)) {
            acc[key] = policies[key];
        }
        return acc;
    }, {});

    // Validate options
    const validOptions = ['verifyStatus', 'fetchRemoteContexts', 'allowDeactivatedDid'];
    const filteredOptions = Object.keys(options).reduce((acc, key) => {
        if (validOptions.includes(key) && typeof options[key] === 'boolean') {
            acc[key] = options[key];
        }
        return acc;
    }, {});

    try {
        const response = await axios.post(
            `${API_URL}/vc/verify`,
            { id, policies: filteredPolicies, ...filteredOptions },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        // Validate response
        if (typeof response.data.verified !== 'boolean') {
            throw new Error('Invalid response format from server');
        }

        return response.data; // { verified, policies, issuer, signer, isTrusted }
    } catch (error) {
        console.error('Error verifying VC:', error);
        const errorMessage =
            error.response?.data?.error ||
            error.message ||
            'Failed to verify VC. Please try again.';
        throw new Error(errorMessage);
    }
};