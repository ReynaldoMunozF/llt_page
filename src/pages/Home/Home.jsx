import "./Home.css";
import { informationTournaments } from "../../Services/information_tournaments.js";
import { Result } from "../../components/Results/Results.jsx";

export const Home = () => {
  console.log(informationTournaments);
  console.log(informationTournaments);
  console.log(informationTournaments);

  return (
    <div className="contenedor">
      {informationTournaments.map((id, index) => (
        <Result
          key={index}
          nameTournament={informationTournaments[index].nameTournament}
          date={informationTournaments[index].date}
          hour={informationTournaments[index].hour}
          match={informationTournaments[index].match}
          result1={informationTournaments[index].result1}
          result2={informationTournaments[index].result2}
          team1={informationTournaments[index].team1}
          team2={informationTournaments[index].team2}
        />
      ))}

      {/* <div class="item">
          <div className="name_tournament">Iberian Cup 2024</div>
          <br />
          <div className="team1">
            <img
              className="img_team"
              src="/src/assets/img/logo_pequeño.png"
              alt=""
            />
            <div className="name_team">LLT Latin Loler Team</div>
            <div className="result">1</div>
          </div>
          <div className="information">
            <div className="date">12.11.24</div>
            <div className="hour">20:00</div>
            <div className="match">Bo1</div>
          </div>
          <div className="team1">
            <img
              className="img_team"
              src="/src/assets/img/logo_pequeño.png"
              alt=""
            />
            <div className="name_team">LLT Latin Loler Team</div>
            <div className="result">1</div>
          </div>
          
        </div> */}
    </div>
  );
};
