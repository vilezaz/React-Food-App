import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = ({ className }) => {
  return (
    <footer className={`${className} bg-pink-50 px-6 py-12`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-bold">CraveOn</h2>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-navy-900">Delivery Time</h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold">Sunday - Thursday</p>
                <p className="text-gray-600">10:00am - 11:00pm</p>
              </div>
              <div>
                <p className="font-semibold">Friday - Saturday</p>
                <p className="text-gray-600">Off day</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-navy-900">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                Location: Board Bazar, Peshawar, Pakistan
              </p>
              <p className="text-gray-600">Phone: 0300-00000000</p>
              <p className="text-gray-600">Email: example@email.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-navy-900">Newsletter</h3>
            <p className="text-gray-600">Subscribe our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r hover:bg-red-600">
                <span className="transform rotate-90">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-red-500">
            Copyright - {new Date().getFullYear()}, website made by <span className='font-semibold'><a href="https://www.github.com/aitezazdev" target='_blank'>Aitezaz Sikandar</a></span>. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-2">
              <a href="#" className="bg-red-500 text-white p-1 text-xl rounded-full hover:bg-red-600">
                <FaFacebook />
              </a>
              <a href="#" className="bg-red-500 text-white p-1 text-xl rounded-full hover:bg-red-600">
                <FaGithub />
              </a>
              <a href="#" className="bg-red-500 text-white p-1 text-xl rounded-full hover:bg-red-600">
                <FaInstagram />
              </a>
              <a href="#" className="bg-red-500 text-white p-1 text-xl rounded-full hover:bg-red-600">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;