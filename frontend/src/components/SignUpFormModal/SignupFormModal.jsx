import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalProvider } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

function SignupFormModal() {
  const dispatch = useDispatch();
  const [inputEmail, setInputEmail] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = ModalProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === inputConfirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email: inputEmail,
          username: inputUsername,
          firstName: inputFirstName,
          lastName: inputLastName,
          password: inputPassword
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data?.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label>
          Username
          <input
            type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </label>
        {errors.username && <p>{errors.username}</p>}
        <label>
          First Name
          <input
            type="text"
            value={inputFirstName}
            onChange={(e) => setInputFirstName(e.target.value)}
            required
          />
        </label>
        {errors.firstName && <p>{errors.firstName}</p>}
        <label>
          Last Name
          <input
            type="text"
            value={inputLastName}
            onChange={(e) => setInputLastName(e.target.value)}
            required
          />
        </label>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label>
          Password
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <label>
          Confirm Password
          <input
            type="password"
            value={inputConfirmPassword}
            onChange={(e) => setInputConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && (
          <p>{errors.confirmPassword}</p>
        )}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormModal;
