import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="flex md:pt-32 pt-20 flex-col items-center justify-center text-center px-4 sm:px-8 md:px-28 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-red-500 mb-4">Get in Touch</h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Have questions or need assistance? Check out our contact details in the footer below.
      </p>
      <button className="mt-4 flex items-center space-x-2 text-red-500 text-lg animate-bounce">
        <span>See Footer</span>
        <FaArrowDown />
      </button>
    </div>
  );
};

export default ContactPage;
