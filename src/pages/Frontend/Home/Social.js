/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";
export default function Social() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
            className="fs-3 social-icon"
            href="https://www.instagram.com/musman.47/"
            target="_blank"
          >
            <FaInstagram />
          </motion.a>
        </div>
        <div className="col-12">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
            className="fs-3 social-icon"
            href="https://www.linkedin.com/in/mernstack-developers/"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <div className="col-12">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
            className="fs-3 social-icon"
            href="https://github.com/muhammadusman36"
            target="_blank"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </>
  );
}
