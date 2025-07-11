import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import EmployeeDashboard from './pages/EmployeeDashboard';
import './styles/main.css';

export default function App() {
  const [user, setUser] = useState(null);

  return user
    ? <EmployeeDashboard onLogout={() => setUser(null)} />
    : <LoginPage onLogin={setUser} />;
}
