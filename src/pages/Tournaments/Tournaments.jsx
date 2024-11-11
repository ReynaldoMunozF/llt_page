import { useEffect, useState } from "react";
import "./Tournaments.css";
import Button from "react-bootstrap/Button";
import { Llt_team } from "../../Services/players";
import Spinner from 'react-bootstrap/Spinner';

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
  const [isGroups, setIsGroups] = useState(false);
  const [isLoadingGroups, setIsLoadingGroups] = useState(false);

  const inputGroup = (event) => {
    setPlayer((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  // Llt_team.includes(player.nickname)
  const addPlayers = () => {
    if (player.namePlayer && player.nickname) {
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
      [matchupsGrupo1[i], matchupsGrupo1[j]] = [
        matchupsGrupo1[j],
        matchupsGrupo1[i],
      ];
    }
    for (let i = matchupsGrupo2.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [matchupsGrupo2[i], matchupsGrupo2[j]] = [
        matchupsGrupo2[j],
        matchupsGrupo2[i],
      ];
    }

    setMatchGrupo1(matchupsGrupo1);
    setMatchGrupo2(matchupsGrupo2);
  };

 const loadGroups = () => {
  setIsLoadingGroups(true);
  setTimeout(() => {
    setIsLoadingGroups(false);
    setIsGroups(true);
  }, 5000);

 }

  useEffect(() => {
    console.log(player, "estoyaqui");
  }, [player]);

  useEffect(() => {
    console.log(players, "current players");
  }, [players]);

  return (
    <div className="container_tournament">
      <div className="container_select_tournament">
        <img
          className="img_tournament"
          onClick={() => setIsRegistration(true)}
          src="/src/assets/img/copa_toxic.png"
          alt=""
        />
      </div>
      {isRegistration ? (
        <div className="registration">
          <input
            className="input1"
            type="text"
            name="namePlayer"
            value={player.namePlayer}
            onChange={inputGroup}
            placeholder="Player Name"
          />
          <input
            className="input1"
            type="text"
            name="nickname"
            value={player.nickname}
            onChange={inputGroup}
            placeholder="Nickname"
          />
          <Button variant="outline-warning" onClick={addPlayers}>
            REGISTER
          </Button>{" "}
          {isAlert ? (
            <h3 className="alert">
              El Jugador no esta habilitado para este torneo
            </h3>
          ) : null}
          <br />
              <h3>PLAYERS</h3>
          <div className="background_players">
            {/* <img className="img_background_player" src="/src/assets/img/fondo_players.jpg" alt="" />  */}
              {players.map((p, index) => (
                <div className="lista" key={index}>
                  
                    <img
                      className="avatar"
                      src={`/src/assets/img/avatar_${index+1}.png`}
                      alt=""
                      />
                  <p className="name_player"> {p.nickname} ({p.namePlayer})</p>
                     
                </div>
                 
                ))}
           
          </div>
          <br />
            <br />
          <Button
            variant="outline-warning"
            onClick={() => (
              dividirGrupos(), loadGroups(), setIsRegistration(false)
            )}
          >
            CREAR GRUPOS
          </Button>{" "}
        </div>
      ) : null}
  <br />
  {isLoadingGroups ? (
    <div className="loading">
      <div className="spinner">
        <h3>GENERANDO TORNEO</h3>
        <Spinner animation="border" variant="warning" />
      </div>
     </div>
     ) : null}
     
     
      {isGroups ? (
        <div className="container_groups">
          <div className="groups">
            <ul>
              <div className="title_group"> &nbsp;GRUPO1 :</div>
              {grupo1Final.map((p, index) => (
                <div className="celda_grupo" key={index}>
                  <img className="img_groups" src={`/src/assets/img/avatar_${index+1}.png`} alt="" />
                  &nbsp; &nbsp; <h3>{grupo1Final[index].nickname}</h3>
                </div>
              ))}
            </ul>
          </div>
          <div className="groups">
            <ul>
            
            
              <div className="title_group"> &nbsp;GRUPO2 :</div>
              {grupo2Final.map((p, index) => (
                <div className="celda_grupo" key={index}>
                  <img className="img_groups" src={`/src/assets/img/avatar_${index+1}.png`} alt="" />
                  &nbsp; &nbsp; <h3>{grupo2Final[index].nickname}</h3>
                  
                </div>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {/* <div>
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
