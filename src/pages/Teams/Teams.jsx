import teams from "../../common/teams.json";
import TeamCard from "../../components/Kartica/TeamCard/TeamCard";
import "./Teams.css";
import { useState } from "react";

function Teams() {
  const [teamsList, setTeamsList] = useState(teams);

  const handleDelete = (teamName) => {
    const updatedTeams = teamsList.filter((team) => team.team_name !== teamName);
    setTeamsList(updatedTeams);
  };

  return (
    <>
      <div className="list">
        {teamsList.map((value) => (
          <TeamCard
            id={value.id}
            name={value.team_name}
            points={`${value.points}pts`}
            wins={value.wins}
            loses={value.loses}
            draws={value.draws}
            losses={value.losses}
            matches={value.matches_played}
            onDelete={() => handleDelete(value.team_name)}
          />
        ))}
      </div>
    </>
  );
}

export default Teams;
