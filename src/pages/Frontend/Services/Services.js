import React, { useState } from "react";
import { FcServices } from "react-icons/fc";
import { MdWeb, MdMobileFriendly } from "react-icons/md";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Full Stack Web App",
      icon: <MdWeb className="" style={{ fontSize: "100px" }} />,
      description: "Building Modern and Impactful Web Applications",
      points: [
        "Expertise in developing responsive and user-friendly web applications using cutting-edge front-end technologies like React and Vue.js.",
        "Proficient in designing and implementing robust and secure RESTful APIs with popular back-end frameworks like Express.js or Django.",
        "Skilled in database management, utilizing both SQL and NoSQL databases like MongoDB, MySQL, and PostgreSQL.",
        "Strong problem-solving and debugging skills, ensuring smooth functionality and seamless user experience.",
        "Familiarity with version control systems like Git, collaborating efficiently in development teams.",
        "Passionate about staying updated with the latest web development trends and best practices.",
      ],
    },
    {
      id: 2,
      title: "React Native",
      icon: <MdMobileFriendly className="" style={{ fontSize: "100px" }} />,
      description: "Empowering Mobile Apps with React Native",
      points: [
        "In-depth knowledge of React Native, enabling the creation of captivating cross-platform mobile applications.",
        "Experience in seamlessly integrating native modules to access device features and functionalities.",
        "Proficient in state management using Redux or MobX, ensuring smooth app performance and user interactions.",
        "Strong focus on mobile app performance optimization, delivering lightning-fast and responsive user experiences.",
        "Ability to develop and deploy apps to both iOS and Android platforms, reaching a wider audience.",
        "Passionate about creating intuitive and visually stunning user interfaces for enhanced user engagement.",
      ],
    },
  ];

  const handleViewMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-4">
          Services <FcServices />
        </h2>
        <div className="row d-flex justify-content-around">
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4 my-3">
              <div
                className="border shadow-sm rounded-3 text-start py-5 p-4 h-100"
                style={{ cursor: "pointer" }}
              >
                {service.icon}
                <h3 className="fw-bold py-3">{service.title}</h3>
                <p onClick={() => handleViewMore(service)}>View More</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div
          className="modal show "
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{selectedService.title}</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-body">
                <p>{selectedService.description}</p>
                <ul>
                  {selectedService.points.map((point, index) => (
                    <li key={index}>
                      <span style={{ marginRight: "10px" }}>&#10003;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
