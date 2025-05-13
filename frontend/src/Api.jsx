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

export const verifyVC = async (cid) => {
  const response = await axios.post(`${API_URL}/vc/verify`, { cid });
  return response.data;
};