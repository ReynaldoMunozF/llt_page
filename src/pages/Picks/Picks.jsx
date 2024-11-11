import { useEffect, useState } from "react";
import { championsLoL } from "../../Services/campeones";
import "./Picks.css";

export const Picks = () => {
  const [champions, setChampions] = useState([]);
  const [championsSelect, setChampionsSelect] = useState([]);
  const [search, setSearch] = useState("");

  const searchChampions = (e) => {
    setSearch(e.target.value);
    filterChampions(e.target.value);
  };

  const filterChampions = (nameChampions) => {
    const champions = championsLoL;
    const championsFilter = champions.filter((champion) =>
      champion.toLowerCase().includes(nameChampions.toLowerCase())
    );
    setChampions(championsFilter);
  };

  useEffect(() => {
    setChampions(championsLoL);
  }, []);

  const handleChampionSelect = (champion) => {
    if (!championsSelect.includes(champion)) {
      setChampionsSelect([...championsSelect, champion]);
    }
  };

  const handleChampionRemove = (championToRemove) => {
    setChampionsSelect(championsSelect.filter(champion => champion !== championToRemove));
  };

  return (
    <div className="container_picks">
      <div className="input_search">
        <input
          type="text"
          placeholder="SEARCH"
          name="search"
          onChange={searchChampions}
        />
        <button>BANEAR</button>
      </div>
      <div className="champions_band">
        <h1>BANEADOS</h1>
        <div className="container_champions_ban">
          {championsSelect.map((champion) => (
            <div className="container_champions" key={champion}>
              <img
                className="img_champion"
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`}
                alt={champion}
              />
              <h1>{champion}</h1>
              <button onClick={() => handleChampionRemove(champion)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>

<div className="container_all_champions">
      {champions.map((champion) => (
        <div className="container_champions" key={champion}>
          <img
            className="img_champion"
            onClick={() => handleChampionSelect(champion)}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`}
            alt={champion}
          />
          <h1>{champion}</h1>
        </div>
      ))}
      </div>
    </div>
  );
};