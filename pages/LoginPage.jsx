import { useState } from 'react';
import { login } from '../services/api';

export default function LoginPage({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(user, pass);
      onLogin(user);
    } catch (err) {
      setError('Invalid credentials');
    }
  }

  return (
    <div className="login-bg">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>HR Portal Login</h2>
        <input placeholder="Username" value={user} onChange={e => setUser(e.target.value)} required />
        <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required />
        <button className="login-btn" type="submit">Login</button>
        {error && <div className="error-msg">{error}</div>}
      </form>
    </div>
  );
}
