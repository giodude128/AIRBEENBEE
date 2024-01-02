import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './LoginForm.css';

function LoginFormModal() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});

  if (currentUser) return <Navigate to="/" replace={true} />;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormErrors({});
    return dispatch(sessionActions.login({ credential: usernameOrEmail, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data?.errors) setFormErrors(data.errors);
      }
    );
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username or Email
          <input
            type="text"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {formErrors.credential && <p>{formErrors.credential}</p>}
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginFormModal;
