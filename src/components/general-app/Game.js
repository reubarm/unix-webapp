import "./moeda.css";

export const Game = ({
  Order,
  Name,
  Image,
  Description,
  Genre,
  Blockchain,
  Blockicon,
  Device,
  Status,
  NFT,
  F2P,
  P2E,
  Website
}) => {
  return (
    <div className="moeda-container">
      <div className="moeda-row">
        {/* <a href="http://reubarm.com"> */}
        <div className="moeda">
          {/* <a href={Website}> */}
          <img src={Image} width="50" classNmae="moeda-img" />
          <h2 className="moeda-name">{Name}
          <span className="moeda-description">{Genre}</span>
          </h2>
          {/* </a> */}
        </div>
        <div className="moeda-data">
          {/* <p className="moeda-detail"><span className="mb-show">Description: </span>{Description}</p> */}
          <p className="moeda-detail blockchain"><span className="mb-show">Blockchain: </span><img src={Blockicon} height="20" /><br/>{Blockchain}</p>
          <p className="moeda-detail"><span className="mb-show">Device: </span>{Device}</p>
          <p className="moeda-detail"><span className="mb-show">Status: </span>{Status}</p>
          <p className="moeda-detail"><span className="mb-show">NFT: </span>{NFT}</p>
          <p className="moeda-detail"><span className="mb-show">F2P: </span>{F2P}</p>
          <p className="moeda-detail"><span className="mb-show">P2E: </span>{P2E}</p>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Game;