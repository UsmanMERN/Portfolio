import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { RiCloseLine } from "react-icons/ri";
import { BsGrid } from "react-icons/bs";
import headerData from "../../../utils/headerData";
export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header z-3">
      <nav className={`navbar navbar-expand-lg ${isMenuOpen ? "active" : ""}`}>
        <div className="container">
          <ScrollLink
            to="home"
            className={`navbar-brand nav-link ${isMenuOpen ? "toggle" : ""}`}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            usman
          </ScrollLink>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{
              scale: 0.8,
              borderRadius: "100%",
            }}
            className={`navbar-toggler border-0 shadow-lg ${
              isMenuOpen ? "active" : ""
            }`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation "
          >
            {isMenuOpen ? (
              <RiCloseLine className="navbar-icon fs-5" />
            ) : (
              <BsGrid className="navbar-icon fs-5" />
            )}
          </motion.button>
          <div
            className={`collapse navbar-collapse navbar-content ${
              isMenuOpen ? "show" : ""
            }`}
          >
            <motion.ul className="navbar-nav ms-auto mb-2 mb-lg-0 content-bar">
              {headerData.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  className="nav-item"
                >
                  <ScrollLink
                    to={item.link}
                    className={`nav-link mx-md-3 fs-6 ${
                      activeLink === item.link ? "active" : ""
                    }`}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    onClick={() => handleLinkClick(item.link)}
                  >
                    {item.icon} {item.text}
                  </ScrollLink>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
