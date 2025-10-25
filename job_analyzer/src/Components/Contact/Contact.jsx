import React from "react";
import Navigate from "../Navigate/Navigate";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <div className="main">
      <Navigate />
      <div className="min-h-screen bg-white flex flex-col items-center">


        {/* Contact Section */}
        <section className="max-w-5xl w-full px-6 py-12">
          <h2 className="text-3xl font-semibold text-center mb-2">Contact Us</h2>
          <p className="text-center text-gray-600 mb-10">
            Have questions or need support? We're here to help you succeed in your career journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left side - Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold flex items-center mb-2">
                  <span className="mr-2">📧</span> Email Us
                </h3>
                <p className="text-gray-600 mb-2">Send us an email and we’ll respond within 24 hours.</p>
                <p className="font-medium text-blue-600">support@jobskillanalyzer.com</p>
                <p className="text-gray-500 text-sm">For general inquiries and support</p>
              </div>

              {/* Address */}
              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold flex items-center mb-2">
                  <span className="mr-2">📍</span> Our Address
                </h3>
                <p className="text-gray-600 mb-2">Visit us at our headquarters.</p>
                <p>BIST<br />
                  Kokta, AnandNagar, Bhopal<br />
                  Madhya Pradesh<br />
                  India</p>
              </div>

              {/* Call */}
              <div className="border rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold flex items-center mb-2">
                  <span className="mr-2">📞</span> Call Us
                </h3>
                <p className="text-gray-600 mb-2">
                  Available Monday to Friday, 9 AM to 6 PM PST.
                </p>
                <p className="font-medium">+91 9657443467</p>
                <p className="text-gray-500 text-sm">Technical support and inquiries</p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="border rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Send us a Message</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fill out the form below and we’ll get back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Comment</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us how we can help you..."
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>

  );
}

export default Contact;