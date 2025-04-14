import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaPiggyBank } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../component/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { showSpinner, openSpinner, closeSpinner } from '../features/page/pageSlice';
import { authenticateUser, selectUserStatus, resetStatus } from '../features/user/userSlice';
import Spinner from '../component/Spinner';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const status = useSelector(selectUserStatus);
  const enableSpinner = useSelector(showSpinner);

  // Reset spinner when Login component is mounted
  useEffect(() => {
    dispatch(closeSpinner());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };
  const enableButton = user.username.length > 0 && user.password.length > 0;

  const login = (e) => {
    e.preventDefault();
    dispatch(openSpinner());
    // dispatch(authenticateUser(user)); only when API is ready
    setTimeout(() => {
      dispatch(resetStatus()); // just to match your logic
      navigate('/dashboard');  // simulate successful login
    }, 3000);
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        dispatch(resetStatus());
        dispatch(closeSpinner());
        navigate('/dashboard');
      }, 3000);
    }
    if (status === 'FAILED') {
      setTimeout(() => {
        alert('Login failed. Please try again.');
        dispatch(resetStatus());
        dispatch(closeSpinner());
      }, 3000);
    }
  }, [dispatch, status, navigate]);

  return (
    <main className="font-roboto flex flex-col w-screen h-screen justify-center items-center bg-gradient-to-r from-gray-300 to-white relative">
      {enableSpinner && <Spinner />}
      <section className="flex flex-col justify-center p-4 w-full max-w-md mx-auto gap-6">
        <div className="flex flex-col items-center">
          <FaPiggyBank size={43} />
          <h1 className="text-2xl font-bold mt-2">SBI-BANK</h1>
        </div>
        
        <form onSubmit={(e) => login(e)} className="flex flex-col w-full bg-white gap-4 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold">Login to your account</h2>

          <InputComponent inputProp={{
            field: "username",
            label: "Username",
            type: "username",
            placeholder: "Enter username",
            value: user.username,
            onChange: handleInputChange
          }} />
          <InputComponent inputProp={{
            field: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter Password",
            value: user.password,
            onChange: handleInputChange
          }} />
          
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
          <a className="underline text-blue-500 hover:text-blue-600 font-medium" href="/register">
            Create One
          </a>
        </p>
      </section>
    </main>
  );
};

export default Login;
