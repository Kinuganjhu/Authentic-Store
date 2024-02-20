import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignIn() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSign = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        alert('Sign-in successful!');
        navigate('/home'); // Redirect to Home.js after sign-in
      })
      .catch((error) => {
        // Handle sign-in error
        setError(error.message);
      });
  };

  return (
    <>
      <h1>Sign Up Page</h1>
      {error && <p>{error}</p>}
      <button onClick={handleSign}>
        Sign Up With Google
      </button>
    </>
  );
}
