import { useEffect, useState } from "react";
import "./Tournaments.css";
import Button from 'react-bootstrap/Button';
import { Llt_team } from "../../Services/players";


export const Tournaments = () => {
  const [player, setPlayer] = useState({
    namePlayer: "",
    nickname: "",
  });

  const [players, setPlayers] = useState([]);
  const [grupo1Final, setGrupo1Final] = useState([]);
  const [grupo2Final, setGrupo2Final] = useState([]);
  const [matchgrupo1, setMatchGrupo1] = useState([]);
  const [matchgrupo2, setMatchGrupo2] = useState([]);
  const [isRegistration, setIsRegistration] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const inputGroup = (event) => {
    setPlayer((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const addPlayers = () => {
    if (player.namePlayer && player.nickname && Llt_team.includes(player.nickname)) {
     
      setPlayers((prevPlayers) => [...prevPlayers, player]);
      console.log([...players, player]);
      setPlayer({ namePlayer: "", nickname: "" });
    } else {
      setIsAlert(true);
      console.error("ambos campos son obligatorios");
    }
  };

  function dividirGrupos() {
    // Mezclar el array original
    const arrayMezclado = players.sort(() => Math.random() - 0.5);

    // Calcular el punto medio
    const puntoMedio = Math.floor(arrayMezclado.length / 2);

    // Dividir el array en dos partes
    const grupo1 = arrayMezclado.slice(0, puntoMedio);
    const grupo2 = arrayMezclado.slice(puntoMedio, puntoMedio * 2);

    setGrupo1Final(grupo1);
    setGrupo2Final(grupo2);
  }

  const generateMatchups = () => {
    const matchupsGrupo1 = [];
    const matchupsGrupo2 = [];

    for (let i = 0; i < grupo1Final.length; i++) {
      for (let j = i + 1; j < grupo1Final.length; j++) {
        matchupsGrupo1.push([grupo1Final[i], grupo1Final[j]]);
      }
    }
    for (let i = 0; i < grupo2Final.length; i++) {
      for (let j = i + 1; j < grupo2Final.length; j++) {
        matchupsGrupo2.push([grupo2Final[i], grupo2Final[j]]);
      }
    }

    //---------------------------------------------------------
    for (let i = matchupsGrupo1.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [matchupsGrupo1[i], matchupsGrupo1[j]] = [matchupsGrupo1[j], matchupsGrupo1[i]];
    }
    for (let i = matchupsGrupo2.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [matchupsGrupo2[i], matchupsGrupo2[j]] = [matchupsGrupo2[j], matchupsGrupo2[i]];
    }

    setMatchGrupo1(matchupsGrupo1);
    setMatchGrupo2(matchupsGrupo2);
  };

  console.log(matchgrupo1);
  console.log(matchgrupo2);
  console.log(matchgrupo1[0]);


  useEffect(() => {
    console.log(player, "estoyaqui");
  }, [player]);

  useEffect(() => {
    console.log(players, "current players");
  }, [players]);

  return (

    <div className="container_tournament">
       <div className="container_select_tournament">
      <img className= "img_tournament" onClick={() => setIsRegistration(true)} src="/src/assets/img/copa_toxic.png" alt="" />
      </div>
      {isRegistration ? (
        
      <div className="registration">
      <input className="input1"
        type="text"
        name="namePlayer"
        value={player.namePlayer}
        onChange={inputGroup}
        placeholder="Player Name"
      />
      
      <input className="input1"
      
        type="text"
        name="nickname"
        value={player.nickname}
        onChange={inputGroup}
        placeholder="Nickname"
      />
      <Button variant="outline-warning" onClick={addPlayers}>Registration</Button>{' '}
      {isAlert ? (
      <h3 className="alert">El Jugador no esta habilitado para este torneo</h3>
       ) : null}
      
      
        <div className="background_players">
         <img className="img_background_player" src="/src/assets/img/fondo_players.jpg" alt="" /> 
        <div className="list_player">
        <ul >
          {players.map((p, index) => (
            <li key={index}>
              {p.nickname} ({p.namePlayer})
            </li>
          ))}
        </ul>
          </div>
      </div>
      </div>
        
      ) : null}
      
      {/* <div>
        <button onClick={dividirGrupos}>GENERA LOS GRUPOS</button>
        <ul>
          <h3>GRUPO1 :</h3>
          {grupo1Final.map((p, index) => (
            <li key={index}>
              {grupo1Final[index].namePlayer} ({grupo1Final[index].nickname})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <h3>GRUPO2 :</h3>
          {grupo2Final.map((p, index) => (
            <li key={index}>
              {p.namePlayer} ({p.nickname})
            </li>
          ))}
        </ul>
        <button onClick={generateMatchups}>GENERA LAS LLAVES</button>
        <ul>
          <h3>PARTIDOS GRUPO1 :</h3>
          {matchgrupo1.map((p, index) => (
            <li key={index}>
              {p[0].nickname} vs {p[1].nickname}
            </li>
          ))}
        </ul>
        <ul>
          <h3>PARTIDOS GRUPO2 :</h3>
          {matchgrupo2.map((p, index) => (
            <li key={index}>
              {p[0].nickname} vs {p[1].nickname}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
