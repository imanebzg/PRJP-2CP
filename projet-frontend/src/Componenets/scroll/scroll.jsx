import React, { useEffect, useState } from 'react';
import './scroll.css'; // Fichier CSS pour définir l'animation

const ScrollHandler = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container">
      {React.Children.map(children, (child, index) => {
        const translateY = -scrollY * 1.5; // Ajustez ce facteur selon votre préférence
        return (
          <div className="animated-element" style={{ animationDelay: `${index * 0.1}s` }}>
            {React.cloneElement(child, {
              style: { ...child.props.style, transform: `translateY(${translateY}px)` }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollHandler;
