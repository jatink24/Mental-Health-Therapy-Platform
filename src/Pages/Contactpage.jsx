import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Have any questions or need assistance? Reach out to us, and we’ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-600">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
              We would love to hear from you. Please fill out the form below, and our team will respond shortly.
            </p>
          </div>

          {/* Contact Form */}
          <form className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
            <div className="mb-6">
              <label className="block text-blue-600 text-lg font-semibold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-blue-600 text-lg font-semibold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-blue-600 text-lg font-semibold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                id="message"
                rows="6"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-600">Our Contact Information</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
              You can also contact us through the following details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-600">Email Us</h3>
              <p className="text-gray-600">support@mihealth.com</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-600">Call Us</h3>
              <p className="text-gray-600">+1 (800) 123-4567</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-600">Visit Us</h3>
              <p className="text-gray-600">1234 Wellness St., Mind City, USA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
