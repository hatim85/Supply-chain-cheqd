// import { issueVC,verifyVC,checkTrustRegistry } from '../services/cheqdService.js';
// import { storeVC,retrieveVC } from '../services/ipfsService.js';

// const issueVCHandler = async (req, res) => {
//   try {
//     const { issuerDid, subjectDid, credentialData } = req.body;
//     const vc = await issueVC(issuerDid, subjectDid, credentialData);
//     const cid = await storeVC(vc);
//     res.json({ vc, cid });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const verifyVCHandler = async (req, res) => {
//   try {
//     const { cid } = req.body;
//     // const vc = await retrieveVC(cid);
//     // const isValid = await verifyVC(vc);
//     // const isTrusted = await checkTrustRegistry(vc.issuer.id);

//     const isValid = await verifyVC(cid);
//     const isTrusted = await checkTrustRegistry(cid.issuer.id);
//     res.json({ isValid, isTrusted });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export { issueVCHandler, verifyVCHandler };



import { decode } from 'jsonwebtoken';
import { issueVC, verifyVC, checkTrustRegistry } from '../services/cheqdService.js';
import { storeVC, retrieveVC } from '../services/mongoService.js';

const issueVCHandler = async (req, res) => {
    try {
        const { issuerDid, subjectDid, credentialData } = req.body;
        if (!issuerDid || !subjectDid || !credentialData) {
            return res.status(400).json({ error: 'issuerDid, subjectDid, and credentialData are required' });
        }
        const { vc, id } = await issueVC(issuerDid, subjectDid, credentialData);
        res.json({ vc, id }); // Return MongoDB _id instead of CID
    } catch (error) {
        console.error('Issue VC error:', error);
        res.status(error.status || 500).json({ error: error.message });
    }
};

const verifyVCHandler = async (req, res) => {
    try {
        const { id, policies, verifyStatus, fetchRemoteContexts, allowDeactivatedDid } = req.body;
        if (!id) {
            return res.status(400).json({ error: 'MongoDB ID is required' });
        }

        // Retrieve JWT from MongoDB
        const jwt = await retrieveVC(id);
        if (!jwt) {
            return res.status(404).json({ error: 'VC not found' });
        }

        // Verify VC with cheqd
        const verificationResult = await verifyVC(jwt, policies, {
            verifyStatus: verifyStatus || false,
            fetchRemoteContexts: fetchRemoteContexts || false,
            allowDeactivatedDid: allowDeactivatedDid || false
        });

        // Check trust registry
        const decoded = decode(jwt);
        const issuerDid = decoded?.iss;
        // const isTrusted = issuerDid ? await checkTrustRegistry(issuerDid) : false;

        res.json({
            ...verificationResult,
            // isTrusted
        });
    } catch (error) {
        console.error('Verify VC error:', error);
        res.status(error.status || 500).json({ error: error.message });
    }
};

export { issueVCHandler, verifyVCHandler };