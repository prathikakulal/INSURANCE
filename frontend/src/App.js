
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PatientView from './pages/PatientView';
import DoctorView from './pages/DoctorView';
import InsuranceForm from './pages/InsuranceForm';
import InsuranceSelection from './pages/InsuranceSelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<PatientView />} />
        <Route path="/doctor" element={<DoctorView />} />
        <Route path="/insurance-form" element={<InsuranceForm />} />
        <Route path="/insurance-selection" element={<InsuranceSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
