import React from "react";

export default function Cards({ cards }) {
  return (
    <>
      {cards.map((card, index) => (
        <div className="col-6 col-sm-4 my-1 h-100" key={index}>
          <div className="border shadow-sm rounded-2 text-center p-1 h-100">
            <p className="fw-bold fs-3">
              <i className={card.icon}></i>
            </p>
            <p className=" fw-bold">{card.title}</p>
            <p>{card.value}</p>
          </div>
        </div>
      ))}
    </>
  );
}
