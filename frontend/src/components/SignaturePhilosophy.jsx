import React, { useEffect, useState } from 'react';
import { mockData } from '../mockData';

const SignaturePhilosophy = () => {
  const { philosophy } = mockData;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('philosophy');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="philosophy" className="section-padding section-burgundy">
      <div className="light-content-container">
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {philosophy.words.map((word, index) => (
              <span
                key={index}
                className={`text-6xl md:text-8xl font-light text-white philosophy-word ${
                  isVisible ? 'animate' : ''
                }`}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  animationDelay: `${index * 0.3}s`
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignaturePhilosophy;