import { useState, useEffect } from 'react';

const useScroll = (element = window) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    const { scrollX, scrollY } = element;
    setScrollPosition({ x: scrollX, y: scrollY });
  };

  useEffect(() => {
    element.addEventListener('scroll', handleScroll);
    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [element]);

  return scrollPosition;
};

export default useScroll;
