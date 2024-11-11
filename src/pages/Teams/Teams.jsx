import "./Teams.css";
import Lol from "../../assets/img/lol.jpg";
import Fornite from "../../assets/img/fornite.jpg";
import Valorant from "../../assets/img/valorant.jpg";
import Player from "../../assets/IMG/player.png";
import MarcoPlayer from "../../assets/IMG/marco_player.png";
import mid from "../../assets/IMG/mid.png";
import { Players } from "../../Services/players";
import { Players2 } from "../../Services/players";

import { useEffect, useState } from "react";
import { PlayerCard } from "../../components/Player_card/Player_card";

export const Teams = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [isLol, setIsLol] = useState(false);

  console.log(Players[0].lane);

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
          <div className="container_players">
            <div className="titulares">
              {Players.map((id, index) => (
                <PlayerCard
                  key={index}
                  nickname={Players[index].name}
                  lane={Players[index].lane}
                />
              ))}
            </div>
            <div className="suplentes">
              {Players2.map((id, index) => (
                <PlayerCard
                  key={index}
                  nickname={Players2[index].name}
                  lane={Players2[index].lane}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
