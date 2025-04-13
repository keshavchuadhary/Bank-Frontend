import React, { useState } from 'react';
import { FaChevronRight, FaPiggyBank } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };
  const enableButton = user.username.length > 0 && user.password.length > 0;

  const login = (e) => {
    e.preventDefault();
    // Simple validation - in a real app, you would verify against your backend
    if (user.username && user.password) {
      alert('Login successful!');
      navigate('/dashboard'); // Navigate to dashboard on successful login
    }
  };

  return (
    <main className="font-roboto flex flex-col w-screen h-screen justify-center items-center bg-gradient-to-r from-gray-300 to-white relative">
      <section className="flex flex-col justify-center p-4 w-full max-w-md mx-auto gap-6">
        <div className="flex flex-col items-center">
          <FaPiggyBank size={40} className="text-blue-600" />
          <h1 className="text-2xl font-bold mt-2">SBI-BANK</h1>
        </div>
        
        <form onSubmit={login} className="flex flex-col w-full bg-white gap-4 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold">Login to your account</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input 
              type="email" 
              placeholder='Enter your email'
              id="email" 
              name="username" 
              required 
              value={user.username}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password" 
              placeholder='Enter Password'
              id="password" 
              name="password" 
              required 
              value={user.password}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <a className='underline text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1' href='/'>
            Forgot Password <FaChevronRight size={12}/>
          </a>

          <button
            type="submit"
            disabled={!enableButton}
            className={`p-3 rounded-lg text-white font-bold mt-2 transition-colors
              ${enableButton 
                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer" 
                : "bg-blue-300 cursor-not-allowed"
              }`}
          >
            LOGIN
          </button>
        </form>

        <p className="text-center text-sm"> 
          Don't have an account?{" "}
          <a className="underline text-red-500 hover:text-red-600 font-medium" href="/register">
            Create One
          </a>
        </p>
      </section>
    </main>
  );
};

export default Login;