import './About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [content1Ref, content1Visible] = useScrollAnimation({ threshold: 0.3 });
  const [content2Ref, content2Visible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="about" className="section about-section">
      <h2
        ref={titleRef}
        className={`section-title fade-in-up ${titleVisible ? 'visible' : ''}`}
      >
        About
      </h2>
      <div className="about-content">
        <p
          ref={content1Ref}
          className={`fade-in-up stagger-1 ${content1Visible ? 'visible' : ''}`}
        >
          Hi, I'm a passionate developer with a keen interest in creating beautiful
          and functional web applications. I specialize in modern web technologies
          and enjoy solving complex problems with elegant solutions.
        </p>
        <p
          ref={content2Ref}
          className={`fade-in-up stagger-2 ${content2Visible ? 'visible' : ''}`}
        >
          With experience in both frontend and backend development, I bring a
          holistic approach to building digital products that users love.
        </p>
      </div>
    </section>
  );
}

export default About;
