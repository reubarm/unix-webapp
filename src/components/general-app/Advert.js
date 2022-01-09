import React, { useEffect } from 'react';

const Advert = () => {
  useEffect(() => {
    window.onload = () => {
      const script = document.createElement('script');
      script.src = 'https://widget.nomics.com/embed.js';
      script.async = true;
      document.getElementById('advert').appendChild(script);
      return () => {
        console.log('wooop');
      };
    };
  }, []);
  /* eslint-disable */
  return <div id="advert"></div>;
};

export default Advert;
