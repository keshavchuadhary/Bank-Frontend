import React, { useEffect, useState } from 'react';
import { FaPiggyBank } from 'react-icons/fa';
import InputComponent from '../component/InputComponent';
import { validateUser } from '../helper/register/validateUser';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserStatus, registerUser, resetStatus } from '../features/user/userSlice';
import { showSpinner, openSpinner, closeSpinner } from '../features/page/pageSlice';
import Spinner from '../component/Spinner';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);
  const enableSpinner = useSelector(showSpinner);
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    tel: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: ''
  });

  const [errors] = useState({status: false});
  const disabled = validateUser(user).status;

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signUp = async() => {
    dispatch(openSpinner());
    dispatch(registerUser(user));
    
  }
  const errorStyle = (field) => {
    return errors[field] ? 'border-red-500' : '';
  };
  useEffect(() => {
    if(status === 'SUCCESS'){
      setTimeout(() => {
        dispatch(resetStatus())
        dispatch(closeSpinner())
        navigate('/successful')
      }, 3000);
    }
    if(status === 'FAILED'){
      setTimeout(() => {
        alert('Registration failed. Please try again.');
        dispatch(resetStatus())
        dispatch(openSpinner())
      }, 3000);
    }
  },[dispatch, status])
  
  return (
    <main className="font-roboto min-h-screen w-full bg-gradient-to-r from-gray-300 to-white flex justify-center pb-8 realative">
      {enableSpinner && <Spinner />}
  <section className="flex flex-col w-full max-w-md bg-white p-6 rounded-xl shadow-md gap-6">
    
    <div className="flex flex-col items-center">
      <FaPiggyBank size={48}  />
      <h1 className="font-bold mt-2">SBI-BANK</h1>
    </div>

    <form className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Create your account</h2>

      {/* Firstname + Lastname Row */}
      <div className="flex gap-4">
        <div className="w-1/2">
          <InputComponent inputProp={{
            field: "firstname", label: "First Name", type: "text", placeholder: "Enter First Name",
            value: user.firstname, onChange: handleInputChange, errorStyle: errorStyle('firstname')
          }} />
        </div>
        <div className="w-1/2">
          <InputComponent inputProp={{
            field: "lastname", label: "Last Name", type: "text", placeholder: "Enter Last Name",
            value: user.lastname, onChange: handleInputChange, errorStyle: errorStyle('lastname')
          }} />
        </div>
      </div>

      <InputComponent inputProp={{
        field: "email", label: "Email", type: "email", placeholder: "Enter Email",
        value: user.email, onChange: handleInputChange, errorStyle: errorStyle('email')
      }} />

      <InputComponent inputProp={{
        field: "username", label: "Username", type: "text", placeholder: "Enter username",
        value: user.username, onChange: handleInputChange, errorStyle: errorStyle('username')
      }} />

      <InputComponent inputProp={{
        field: "tel", label: "Phone Number", type: "tel", placeholder: "+91 1234567890",
        value: user.tel, onChange: handleInputChange, errorStyle: errorStyle('tel')
      }} />
      {/* Gender dropdown */}
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="gender" className="text-sm font-medium">
          Gender <span className="text-red-500">*</span>
        </label>
        <select
          value={user.gender}
          name="gender"
          onChange={handleInputChange}
          id="gender"
          className={`border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${errorStyle('gender')}`}
          required
        >
          <option value="">Select Your Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <InputComponent inputProp={{
        field: "dob", label: "Date of Birth", type: "date", placeholder: "Enter Date of Birth",
        value: user.dob, onChange: handleInputChange, errorStyle: errorStyle('dob')
      }} />

      {/* Password + Confirm Password Row */}
      <div className="flex gap-4">
        <div className="w-1/2">
          <InputComponent inputProp={{
            field: "password", label: "Password", type: "password", placeholder: "Enter Password",
            value: user.password, onChange: handleInputChange, errorStyle: errorStyle('password')
          }} />
        </div>
        <div className="w-1/2">
          <InputComponent inputProp={{
            field: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "Re-enter Password",
            value: user.confirmPassword, onChange: handleInputChange, errorStyle: errorStyle('confirmPassword')
          }} />
        </div>
      </div>

      

      <button
        onClick={(e) => {
          e.preventDefault();
          if (!disabled) {
            signUp();
          }
        }}
        type="submit"
        disabled={disabled}
        className={`p-3 rounded-lg text-white font-bold mt-2 transition-colors
          ${disabled
            ? 'bg-blue-300 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
          }`}
      >
        SIGN UP
      </button>
    </form>

    <p className="text-center text-sm">
      Already have an account?{' '}
      <a href="/login" className="underline text-blue-500 hover:text-blue-600 font-medium">
        Login
      </a>
    </p>
  </section>
</main>

  );
};

export default Register;
