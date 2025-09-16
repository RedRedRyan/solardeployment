import React from 'react';

const Contact = () => {
  return (
    <main>
      <section id="contact" className="min-h-screen py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl md:text-6xl font-modern-negra mb-10 text-center">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl font-serif mb-6 text-gradient">Get In Touch</h3>
              <p className="mb-8 text-lg">
                Have questions about our solar cabinet dryers or interested in placing an order? 
                Fill out the form or use our contact information below to reach us.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="text-yellow-500 text-2xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>123 Solar Way, Green Valley, CA 94000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-yellow-500 text-2xl">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-yellow-500 text-2xl">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p>info@solarcabinetdryer.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-yellow-500 text-2xl hover:text-yellow-400">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-yellow-500 text-2xl hover:text-yellow-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-yellow-500 text-2xl hover:text-yellow-400">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-yellow-500 text-2xl hover:text-yellow-400">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="card p-8 shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-bold">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-bold">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-bold">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
