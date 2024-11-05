import { useEffect, useState } from "react";

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

  const inputGroup = (event) => {
    setPlayer((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const addPlayers = () => {
    if (player.namePlayer && player.nickname) {
      setPlayers((prevPlayers) => [...prevPlayers, player]);
      console.log([...players, player]);
      setPlayer({ namePlayer: "", nickname: "" });
    } else {
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
    <div className="container_input">
      <input
        type="text"
        name="namePlayer"
        value={player.namePlayer}
        onChange={inputGroup}
        placeholder="Player Name"
      />
      <input
        type="text"
        name="nickname"
        value={player.nickname}
        onChange={inputGroup}
        placeholder="Nickname"
      />
      <button onClick={addPlayers}>Add Player</button>
      <div>
        <h3>Players List:</h3>
        <ul>
          {players.map((p, index) => (
            <li key={index}>
              {p.namePlayer} ({p.nickname})
            </li>
          ))}
        </ul>
        <button onClick={dividirGrupos}>GENERA LOS GRUPOS</button>
      </div>
      <div>
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
      </div>
    </div>
  );
};
