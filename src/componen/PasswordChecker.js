import React, { useState } from 'react';

export const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const handleChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const handlePasswordCheck = () => {
    if (password.length === 0) {
      alert('You have not entered a password');
    } else if (password.length < 6) {
      console.error('Password strength: Weak');
    } else if (password.length >= 6 && password.length <= 10) {
      console.log('Password strength: Medium');
    } else if (password.length > 10) {
      console.log('Password strength: Strong');
    }
  };
  return (
    <div className="m-2">
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        placeholder="Masukan pasword anda"
        className="rounded-md border border-black px-3 py-2 m-2"
      />
      <button
        className="m-1 p-2 bg-gray-700 text-white rounded-lg "
        onClick={handlePasswordCheck}
        a
      >
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
