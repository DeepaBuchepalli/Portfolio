import React, { useEffect, useRef } from 'react';
import './Projects.css'; // Ensure this is the correct CSS file

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const refCopy = projectsRef.current; // Copy the ref to a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (refCopy) {
      observer.observe(refCopy);
    }

    return () => {
      if (refCopy) {
        observer.unobserve(refCopy);
      }
    };
  }, []);

  const soloProjects = [
    {
      id: 1,
      title: 'Safe Home Integrated Smoke and Door Monitoring System through AIoT',
      description: 'Developed a smart home system integrating AI and IoT for real-time smoke detection and door monitoring. Utilized AI algorithms to reduce false alarms and detect unauthorized access or unusual activity. Enabled remote monitoring and control via mobile and web apps for instant alerts and automated response.',
    },
    {
      id: 2,
      title: 'Web-Based E-Pharmacy Store',
      description: 'Medico is a full-stack web app that simplifies medicine search and purchase based on symptoms. Built with React.js, Node.js, Express.js, and MongoDB, it offers JWT authentication, real-time availability checks, and a secure payment gateway, ensuring a seamless and secure user experience.',
    },
    {
      id: 3,
      title: 'React.js Frontend Project',
      description: 'Task Planner is a React.js web application designed to help users efficiently manage tasks by allowing them to add, complete, and delete tasks, with completed ones automatically moving to the bottom for better organization. It features a user-friendly interface and smart task organization. Tech Stack: HTML, CSS, JavaScript, and React.js.',
    },
  ];

  return (
    <section id="projects" ref={projectsRef} className="hidden">
      <h2>My Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
