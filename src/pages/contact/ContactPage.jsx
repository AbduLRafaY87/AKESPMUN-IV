import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Hero from "./Hero";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center mb-12 ">
      <Hero />
      <div className="max-w-2xl bg-white shadow-lg rounded-3xl mt-10 mb-12 p-8">
        {/* Contact Form */}
        <div className="flex flex-col justify-center p-6">
          <p className="text-center text-lg text-gray-700 mb-4">
            Thank you for your interest in AKESP Model United Nation . We appreciate your enthusiasm and look forward to hearing from you. Please fill out the form below, and we will get back to you as soon as possible.
          </p>
          <form className="space-y-6">
            <label className="block text-gray-700 mb-2 mt-6 font-medium">Name</label>
            <input type='text' placeholder='Your Name' required
              className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-300 focus:border-blue-600 focus:bg-white transition-all" />
            
            <label className="block text-gray-700 mb-2 mt-6 font-medium">Email</label>
            <input type='email' placeholder='Your Email' required
              className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-300 focus:border-blue-600 focus:bg-white transition-all" />
            
            <label className="block text-gray-700 mb-2 mt-6 font-medium">Phone No.</label>
            <input type='tel' placeholder='Your Phone Number' required
              className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-300 focus:border-blue-600 focus:bg-white transition-all" />
            
            <label className="block text-gray-700 mb-2 mt-6 font-medium">Message</label>
            <textarea placeholder='Your Message' rows="10" required 
              className="w-full bg-gray-100 rounded-md px-4 text-sm py-3 resize-none outline-none border border-gray-300 focus:border-blue-600 focus:bg-white transition-all"></textarea>
            
            <button type='submit' style={{backgroundColor: '#3b82f6', text: 'white',}}
              className="w-full text-white  transform hover:scale-0.9 mt-6 rounded-md text-sm px-6 py-3 font-semibold transition-all">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center mt-8">
          <p className="text-lg font-semibold text-gray-900">Follow Us</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-blue-600 text-2xl transition transform hover:scale-110"><FacebookIcon style={{fontSize: '3rem'}}></FacebookIcon></a>
            {/* <a href="#" className="text-blue-500 text-2xl transition transform hover:scale-110">TW</a> */}
            <a href="https://www.instagram.com/akesp.mun/" className="text-red-500 text-xl transition transform hover:scale-110"><InstagramIcon style={{fontSize: '3rem'}}></InstagramIcon></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
