import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate login logic here
    setError('');  // Clear error if any
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Login to Cerebral Gain</h1>

        {error && (
          <div className="mb-4 text-center text-red-500">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-blue-600 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-600 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200 w-full"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password / Sign Up Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Forgot your password? <a href="#" className="text-blue-600 hover:underline">Reset it here</a>.
          </p>
          <p className="mt-2 text-gray-600">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up now</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
