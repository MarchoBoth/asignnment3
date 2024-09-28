import React, { useState } from 'react';

export const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const handleChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const handlePasswordCheck = () => {
    if (password.length < 6) {
      console.error('Password strength: Weak');
    } else if (password.length >= 6 && password.length <= 10) {
      console.log('Password strength: Medium');
    } else if (password.length > 10) {
      console.log('Password strength: Strong');
    }
    alert(`You submitted: ${password}`); // Original alert for valid passwords
  };
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        placeholder="Masukan pasword anda"
      />
      <button onClick={handlePasswordCheck} a>
        Submit
      </button>
      {password.length < 6 && (
        <h1 className="text-red-500 font-bold text-sm">
          Password strength: Weak
        </h1>
      )}
      {password.length >= 6 && password.length <= 10 && (
        <h1 className="text-yellow-500 font-bold text-sm">
          Password strength: Medium
        </h1>
      )}
      {password.length > 10 && (
        <h1 className="text-green-500 font-bold text-sm">
          Password strength: Strong
        </h1>
      )}
    </div>
  );
};
