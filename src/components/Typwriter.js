import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (currentText === texts[currentJobIndex] && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), 2000); // Wait for a while before deleting
      return () => clearTimeout(timeout);
    }

    if (deleting && currentText === '') {
      setDeleting(false);
      setCurrentJobIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop back to the first text
    }

    const timeout = setTimeout(() => {
      setCurrentText((prevText) =>
        deleting ? prevText.slice(0, prevText.length - 1) : prevText + texts[currentJobIndex][currentIndex]
      );
      setCurrentIndex((prevIndex) => (deleting ? prevIndex : prevIndex + 1) % texts[currentJobIndex].length);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, texts, currentJobIndex, deleting, delay]);

  return <span style={{ fontWeight: 'bold', color: 'red' }}>{currentText}</span>;
};

export default Typewriter;
