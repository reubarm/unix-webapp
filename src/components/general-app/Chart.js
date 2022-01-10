import React, { useEffect } from 'react';

const Chart = () => {
  useEffect(() => {
    window.onload = () => {
      const script = document.createElement('script');
      script.src = 'https://www.livecoinwatch.com/static/lcw-widget.js';
      script.async = true;
      document.getElementById('chart').appendChild(script);
      return () => {
        console.log('wooop');
      };
    };
  }, []);
  /* eslint-disable */
  return <div id="chart"></div>;
};

// const Ticker = () => {
//   useEffect(() => {
//     window.onload = () => {
//       const script = document.createElement('script');
//       script.src = 'https://widget.nomics.com/embed.js';
//       script.async = true;
//       document.getElementById('ticker').appendChild(script);
//       return () => {
//         console.log('wooop');
//       };
//     };
//   }, []);
//   /* eslint-disable */
//   return <div id="ticker"></div>;
// };

export default Chart;
