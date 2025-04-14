import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationSucessful = () => {
  return (
    <section className='font-roboto bg-gradient-to-r from-gray-300 to-white-500 h-screen w-screen flex justify-center items-center'>
      <div className='flex gap-2 flex-col'>
        <h1 className='text-4xl font-bold text-center'>Registration Successful</h1>
        <p className='text-center text-gray-600'>
          Your account has been created successfully. You can now{' '}
          <Link to="/login" className="text-blue-500  hover:text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegistrationSucessful;
