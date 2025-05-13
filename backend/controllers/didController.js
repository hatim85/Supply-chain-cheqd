import { createDID } from "../services/cheqdService.js";

const createDIDHandler = async (req, res) => {
  try {
    const { issuerIdentifier, subjectIdentifier } = req.body;
    const result = await createDID(issuerIdentifier, subjectIdentifier);
    if (!issuerIdentifier || !subjectIdentifier) {
      return res.status(400).json({ error: 'Identifier is required' });
    }
    res.json(result);
  } catch (error) {
    const status = error.message.includes('400') ? 400 : 500;
    res.status(status).json({ error: error.message });
  }
};

export { createDIDHandler };