import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Test(props) {
  const [moedas, setMoedas] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false'
      )
      .then((res) => {
        setMoedas(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredMoedas = moedas.filter(
    (moeda) =>
      moeda.symbol.toLowerCase().includes('axs'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('decentra'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('sandbox'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('myneighbour'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('illuv'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('gala'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('wemix'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('yield guild'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('mobox'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('star atlas'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('alien world'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('smooth love'.toLowerCase()) ||
      moeda.name.toLowerCase().includes('aavegot'.toLowerCase())
  );

  const Moeda = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange,
    /* eslint-disable */
    price_change_percentage_24h,
    /* eslint-disable */
    market_cap_change_percentage_24h
  }) => {
    return (
        <div className="moeda-row">
          <img src={image} alt="crypto" />
          <h2 className="capital">{symbol}</h2>
          <h2>{name}</h2>
          <span className="mb-show">Symbol: </span>
          {symbol}
          <br />
          <span className="mb-show">Price: </span>${price}
          <br />
          <span className="mb-show">24hr Price Change %: </span>${price_change_percentage_24h}
          <br />
          <span className="mb-show">Market Cap Change %: </span>${market_cap_change_percentage_24h}
          <br />
          <span className="mb-show">Volume: </span>${volume.toLocaleString()}
          <br />
          <span className="mb-show">Price Change: </span>
          {priceChange.toFixed(2)}%<br />
          <span className="mb-show">Market Cap: </span> ${marketcap.toLocaleString()}
        </div>
    );
  };

  return (
    <>
      {filteredMoedas.map((moeda) => {
        return (
          <Moeda
            key={moeda.id}
            name={moeda.name}
            price={moeda.current_price}
            symbol={moeda.symbol}
            marketcap={moeda.market_cap}
            price_change_percentage_24h={moeda.price_change_percentage_24h}
            market_cap_change_percentage_24h={moeda.market_cap_change_percentage_24h}
            volume={moeda.total_volume}
            image={moeda.image}
            priceChange={moeda.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}
