import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthGateway from './pages/AuthGateway';
import StudentDashboard from './pages/StudentDashboard';
import MentorDashboard from './pages/MentorDashboard';
import TPODashboard from './pages/TPODashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<AuthGateway />} />
        <Route path="/student/*" element={<StudentDashboard />} />
        <Route path="/mentor/*" element={<MentorDashboard />} />
        <Route path="/tpo/*" element={<TPODashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
