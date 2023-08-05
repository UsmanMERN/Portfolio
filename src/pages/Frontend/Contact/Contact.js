import React, { useState } from "react";
import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Formspree endpoint and method
    const endpoint = "https://formspree.io/f/mgejobgv";
    const method = "POST";

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        console.log("Form submitted successfully!");

        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Form submission failed.");
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container mb-5 pb-5">
      <h2 className="text-center mb-4 my-3">Contact Me ✉️</h2>
      <p className="pb-3 text-center font-size-lg">
        Let's Connect and Create Something Amazing 🚀
      </p>
      <div className="row">
        {/* Left side: Contact Information */}
        <div className="col-md-4 offset-lg-2 offset-md-2">
          <h3 className="text-center my-4 py-3">Get in Touch</h3>
          <div className="border rounded card p-3 mb-3 contact-box">
            <FaFacebook size={48} className="d-block mx-auto mb-2" />
            <p className="text-center mb-0">Connect with me on Facebook</p>
            <a
              href="https://web.facebook.com/profile.php?id=100054508777162"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-center mt-1"
            >
              Visit Profile
            </a>
          </div>
          <div className="border rounded card p-3 mb-3 contact-box">
            <FaWhatsapp size={48} className="d-block mx-auto mb-2" />
            <p className="text-center mb-0">Message me on WhatsApp</p>
            <a
              href="https://wa.me/03018531368"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-center mt-1"
            >
              Send Message
            </a>
          </div>
          <div className="border rounded card p-3 mb-3 contact-box">
            <FaEnvelope size={48} className="d-block mx-auto mb-2" />
            <p className="text-center mb-0">Send me an email</p>
            <a
              href="mailto:usman853136@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-center mt-1"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="col-md-6">
          <h3 className="text-center my-4 py-3">Tell Me About Your Project</h3>
          <div className="rounded p-3 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="py-2 px-5 rounded-3 text-capitalize button home-section--button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
//  <a
//                     download="usman_portfolio.pdf"
//                     href={CV}
//                     className=""
//                     style={{ cursor: "pointer" }}
//                   ></a>
