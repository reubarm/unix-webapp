import React, { useEffect } from 'react';

const Ticker = () => {
  useEffect(() => {
    window.onload = () => {
      const prices = document.createElement('script');
      prices.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
      prices.async = true;
      document.getElementById('ticker').appendChild(prices);
      return () => {
        console.log('wooop');
      };
    };
  }, []);
  /* eslint-disable */
  return <div id="ticker" style={{ width: '40%!important' }}></div>;
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

export default Ticker;
