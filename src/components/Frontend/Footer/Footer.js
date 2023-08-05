import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <hr />
      <div className="bg-white">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <h2 className="text-center">Usman</h2>
              </div>
              <div className="mb-3 text-center my-3">
                <motion.ul className="navbar-nav ms-auto mb-2 mb-lg-0 content-bar list-style-none d-flex justify-content-center align-items-center flex-row">
                  <motion.li
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    className="nav-item "
                  >
                    <ScrollLink
                      to={"portfolio"}
                      className={`nav-link mx-md-3 fs-6 `}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={100}
                    >
                      Projects
                    </ScrollLink>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    className="nav-item list-style-none"
                  >
                    <ScrollLink
                      to={"about"}
                      className={`nav-link mx-md-3 fs-6 `}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={100}
                    >
                      About
                    </ScrollLink>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    className="nav-item list-style-none"
                  >
                    <ScrollLink
                      to={"services"}
                      className={`nav-link mx-md-3 fs-6 `}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={100}
                    >
                      Services
                    </ScrollLink>
                  </motion.li>
                </motion.ul>
              </div>
              <div className="social-media-links text-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
                  className="btn btn-outline-primary btn-floating btn-lg m-1"
                  href="https://www.facebook.com/profile.php?id=100054508777162"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
                  className="btn btn-outline-primary btn-floating btn-lg m-1"
                  href="https://twitter.com/musman_47"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
                  className="btn btn-outline-primary btn-floating btn-lg m-1"
                  href="https://www.instagram.com/musman.47/"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
                  className="btn btn-outline-primary btn-floating btn-lg m-1"
                  href="https://www.linkedin.com/in/mernstack-developers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
                  className="btn btn-outline-primary btn-floating btn-lg m-1"
                  href="https://github.com/muhammadusman36"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <FaGithub />
                </motion.a>
              </div>
              <div className="mt-5 text-center pt-5">
                <p>&copy; All Rights Reserved. Muhammad Usman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
