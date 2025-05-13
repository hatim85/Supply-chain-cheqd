import express from 'express';
import cors from 'cors';
import { port } from './config.js';
import { createDIDHandler } from './controllers/didController.js';
import { issueVCHandler, verifyVCHandler } from './controllers/vcController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/did/create', createDIDHandler);
app.post('/api/vc/issue', issueVCHandler);
app.post('/api/vc/verify', verifyVCHandler);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});