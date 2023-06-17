import { Container, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ data }) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  useEffect(() => {
    if (currentIndex < data.length) {
      const timeoutId = setTimeout(() => {
        setText(prevText => prevText + data[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100); // Adjust the typing speed as desired (in milliseconds)
  
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, data]);

  return  <Container><Text fontSize={{base:"21px",md:"50px"}} color='tomato'>
  {text}
</Text>
</Container> 
};

export default TypewriterEffect;