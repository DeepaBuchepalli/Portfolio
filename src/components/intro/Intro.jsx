import React, { useEffect, useRef } from "react";
import { FaAward } from "react-icons/fa";
import ME from "../../assets/me.jpeg";
import "./intro.css";

const Intro = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const currentParagraph = paragraphRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          } else {
            entry.target.classList.remove("slide-in");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (currentParagraph) {
      observer.observe(currentParagraph);
    }

    return () => {
      if (currentParagraph) {
        observer.unobserve(currentParagraph);
      }
    };
  }, []);

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Student at LBRCE</h5>
              <small></small>
            </article>
          </div>
          <p ref={paragraphRef}>
          I am a passionate front-end developer currently pursuing
          my 3rd year of B.Tech in Information Technology 
          at Lakireddy Balireddy College of Engineering.
          Skilled in Java, Python, HTML, CSS, JavaScript, 
          and React.js, I have a strong foundation in building
          responsive and user-friendly web applications. My expertise 
          lies in designing intuitive interfaces, ensuring cross-browser
          compatibility, and creating seamless digital experiences. I am eager
          to leverage my technical skills and creativity to develop innovative 
          solutions that enhance user interaction and accessibility.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
