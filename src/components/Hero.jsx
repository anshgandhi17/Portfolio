import { useState, useEffect } from 'react';
import './Hero.css';
import SocialLinks from './SocialLinks';

function Hero() {
  const taglines = [
    { text: "Full Stack Developer", subtitle: "building features and occasionally breaking them." },
    { text: "Creative Problem Solver", subtitle: "because logic deserves style." },
    { text: "Basketball Watcher", subtitle: "reading plays and APIs alike." },
    { text: "Gym Goer", subtitle: "optimizing both code and core." },
    { text: "Coffee Drinker", subtitle: "running on Java and java." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId);
  }, [taglines.length]);

  return (
    <section className="hero">
      <h1 className="hero-name">Ansh Gandhi</h1>
      <div className="taglines-container">
        <div className={`tagline-item ${isVisible ? 'visible' : 'hidden'}`}>
          <span className="tagline-main">{taglines[currentIndex].text}</span>
          <span className="tagline-separator"> — </span>
          <span className="tagline-subtitle">{taglines[currentIndex].subtitle}</span>
        </div>
      </div>
      <SocialLinks />
    </section>
  );
}

export default Hero;
