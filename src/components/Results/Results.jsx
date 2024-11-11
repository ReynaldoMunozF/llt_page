
import "./Results.css"


export const Result = ({nameTournament,team1,result1,date,hour,match,team2,result2}) =>{
    return(

    <div className="item">
    <div className="name_tournament">{nameTournament}</div>
    <br />
    <div className="team1">
      <img
        className="img_team"
        src="/src/assets/img/logo_pequeño.png"
        alt=""
      />
      <div className="name_team">{team1} </div>
      <div className="result">{result1}</div>
    </div>
    <div className="information">
      <div className="date">{date}</div>
      <div className="hour">{hour}</div>
      <div className="match">{match}</div>
    </div>
    <div className="team1">
      <img
        className="img_team"
        src="/src/assets/img/logo_pequeño.png"
        alt=""
      />
      <div className="name_team">{team2}</div>
      <div className="result">{result2}</div>
    </div>
    
  </div>
    )

}