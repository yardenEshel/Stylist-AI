import React, { useEffect, useRef, useState } from 'react';
import './FadeInOnScrolling.css';

const FadeInOnScroll = ({ children, threshold = 0.2, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: threshold,
      rootMargin: '0px 0px -50px 0px', // Ensure it triggers before fully entering view
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;
