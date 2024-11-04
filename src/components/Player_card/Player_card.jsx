import "./Player_card.css";
import Lol from "../../assets/IMG/lol.jpg";
import Fornite from "../../assets/IMG/fornite.jpg";
import Valorant from "../../assets/IMG/valorant.jpg";
import Player from "../../assets/IMG/player.png";
import MarcoPlayer from "../../assets/IMG/marco_player.png";
import mid from "../../assets/IMG/mid.png";


export const PlayerCard = ({nickname , lane}) => {
 
   
  return (
    
        <>
          <div className="container_player">
            <div className="foto_player">
              <img className="img_players" src={Player} alt="" />
            </div>
            <div className="card_player">
              <div>
                <img className="datos_player" src={MarcoPlayer} alt="" />
              </div>
              <div>
                <img className="lane_player" src={lane} alt="" />
              </div>
              <div>
                <h1 className="nickname">{nickname}</h1>
              </div>
            </div>
          </div>
        </>
   
  );
};