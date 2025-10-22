import './Experiences.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Experiences() {
  const experiences = [
    {
      id: 1,
      title: 'Testing Automation Engineer',
      company: 'ICBC',
      period: 'Jan 2025 – Aug 2025',
      description:
        'Driving automation excellence with TestCafe, Guidewire Cloud, Postman, and Zephyr. Focused on building reliable end-to-end tests and streamlining QA workflows to ensure top-tier product quality across enterprise insurance systems.',
    },
    {
      id: 2,
      title: 'Junior Software Developer',
      company: 'Greenspace Mental Health',
      period: 'Sep 2022 – Apr 2023',
      description:
        'Worked across the full stack — from implementing new product features to enhancing test coverage within a Django framework. Contributed to creating a smoother, more stable platform experience for users and clinicians alike.',
    },
  ];

  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [card1Ref, card1Visible] = useScrollAnimation({ threshold: 0.2 });
  const [card2Ref, card2Visible] = useScrollAnimation({ threshold: 0.2 });
  const [card3Ref, card3Visible] = useScrollAnimation({ threshold: 0.2 });

  const cardRefs = [card1Ref, card2Ref, card3Ref];
  const cardVisibles = [card1Visible, card2Visible, card3Visible];

  return (
    <section id="experiences" className="section experiences-section">
      <h2
        ref={titleRef}
        className={`section-title fade-in-up ${titleVisible ? 'visible' : ''}`}
      >
        Experiences
      </h2>
      <div className="experiences-container">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            ref={cardRefs[index]}
            className={`experience-card fade-in-up stagger-${index + 1} ${cardVisibles[index] ? 'visible' : ''}`}
          >
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-period">{exp.period}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
