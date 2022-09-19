import React from "react";

const Hero = (props) => {
  return (
    <section className="d-flex flex-column align-items-center pt-2 mb-1">
      <img src={props.src} alt={props.alt} className="mb-1 hero-image my-4" />
      <div className="pt-3">
        <h3 className="mb-1 text-center">{props.name}</h3>
        <p className="text-center text-center" dangerouslySetInnerHTML={{__html: props.bio}}></p>
      </div>
    </section>
  );
};

export default Hero;
