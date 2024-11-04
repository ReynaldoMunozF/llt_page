import "./Teams.css"
import Lol from "../../assets/IMG/lol.jpg";
import Fornite from "../../assets/IMG/fornite.jpg";
import Valorant from "../../assets/IMG/valorant.jpg";
import Player from "../../assets/IMG/player.jpg";
import { useEffect, useState } from "react";

export const Teams =() =>{
    const [isEditing, setIsEditing] = useState(true);
    const [isLol, setIsLol] = useState(false);


return(

  

    
    <div className="container_t">
    {isEditing ? (
    <>
    <div className="foto_lol" ><img className="img_teams" src={Lol} onClick={() => (setIsEditing(false),setIsLol(true))} alt="" /></div>
    <div className="foto_fornite"><img className="img_teams" src={Fornite} alt="" /></div>
    <div className="foto_valorant"><img className="img_teams" src={Valorant} alt="" /></div>
    </>
) : null}
    
    {isLol ? (
        <>
    
    <div className="foto_player" ><img className="img_players"  src={Player}  alt="" /></div>
    <div className="foto_player" ><img className="img_players"  src={Player}  alt="" /></div>
    <div className="foto_player" ><img className="img_players"  src={Player}  alt="" /></div>
    <div className="foto_player" ><img className="img_players"  src={Player}  alt="" /></div>
    <div className="foto_player" ><img className="img_players"  src={Player}  alt="" /></div>
   
    
    </>
) : null}
</div>


)
}
