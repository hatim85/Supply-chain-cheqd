import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import IssueVCForm from './components/IssueVCForm';
import VerifyVCForm from './components/VerifyVCForm';
import QRCodeScanner from './components/QRCodeScanner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl">Supply Chain App</h1>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/issue-vc" element={<IssueVCForm />} />
          <Route path="/verify-vc" element={<VerifyVCForm />} />
          <Route path="/scan-qr" element={<QRCodeScanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;