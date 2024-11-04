import "./Teams.css";
import Lol from "../../assets/IMG/lol.jpg";
import Fornite from "../../assets/IMG/fornite.jpg";
import Valorant from "../../assets/IMG/valorant.jpg";
import Player from "../../assets/IMG/player.png";
import MarcoPlayer from "../../assets/IMG/marco_player.png";
import mid from "../../assets/IMG/mid.png";
import { PLayers } from "../../Services/players";

import { useEffect, useState } from "react";
import { PlayerCard } from "../../components/Player_card/Player_card";

export const Teams = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [isLol, setIsLol] = useState(false);

console.log(PLayers[0].lane);

  return (
    <div className="container_t">
      {isEditing ? (
        <>
          <div className="foto_lol">
            <img
              className="img_teams"
              src={Lol}
              onClick={() => (setIsEditing(false), setIsLol(true))}
              alt=""
            />
          </div>
          <div className="foto_fornite">
            <img className="img_teams" src={Fornite} alt="" />
          </div>
          <div className="foto_valorant">
            <img className="img_teams" src={Valorant} alt="" />
          </div>
        </>
      ) : null}

      {isLol ? (
        <>
        {PLayers.map((id, index) => (
            <PlayerCard
            key={index}
            nickname={PLayers[index].name}
            lane={PLayers[index].lane}
            />
            
            
        ))}

       

          {/* <div className="container_player">
            <div className="foto_player">
              <img className="img_players" src={Player} alt="" />
            </div>
            <div className="card_player">
              <div>
                <img className="datos_player" src={MarcoPlayer} alt="" />
              </div>
              <div>
                <img className="lane_player" src={Mid} alt="" />
              </div>
              <div>
                <h1 className="nickname">XLANYERX</h1>
              </div>
            </div>
          </div> */}
        </>
      ) : null}
    </div>
  );
};
