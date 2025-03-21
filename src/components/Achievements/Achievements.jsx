import React, { useEffect, useRef } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Achievements.css';

const Achievements = () => {
  const achievementRef = useRef(null);

  useEffect(() => {
    const refCopy = achievementRef.current; // Store ref in a variable

    if (!refCopy) return; // Ensure it's not null

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

    observer.observe(refCopy);

    return () => {
      observer.unobserve(refCopy);
    };
  }, []);

  return (
    <section id="achievements" ref={achievementRef} className="hidden">
      <h5>See My</h5>
      <h2>Achievements</h2>
      
      <div className="achievement__container">
        {/* Achievement 1 */}
        <article className="achievement__box">
          <h3>Finalist In Full Stack Mastery Bootcamp By Innostes Pvt Ltd</h3>
          <div className="achievement__details">
            <BsFillPatchCheckFill className="achievement__icon" />
            <p>
              Reached the finals of the Full Stack Mastery Bootcamp by Innostes Pvt Ltd, demonstrating strong web development skills and problem-solving abilities in a competitive environment.
            </p>
          </div>
        </article>

        {/* Achievement 2 */}
        <article className="achievement__box">
          <h3>Participant In HackIT Hackathon</h3>
          <div className="achievement__details">
            <BsFillPatchCheckFill className="achievement__icon" />
            <p>
              Participated in HackIT, a hackathon conducted by our college, showcasing problem-solving skills and innovative thinking in a competitive environment.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Achievements;
