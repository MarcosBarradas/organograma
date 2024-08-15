import Card from "../Card";
import "./Team.css";

const Team = ({ team, collaborators }) => {
  //filtramos os colaboradores para saber somente os que fazem parte desse time
  const teamColab = collaborators.filter(
    (collaborator) => collaborator.selectTeam === team.name
  );

  //se não tiver nenhum nem renderizamos a seção
  return (
    teamColab.length > 0 && (
      <section
        className={`team`}
        style={{
          "--team-bg-color": team.secondColor,
          "--title-after-bg-color": team.firstColor,
        }}
      >
        <h3 className="title">{team.name}</h3>
        <div className="underline"></div>
        <div className="cards-container">
          {/*renderizamos a lista de colaboradores dessa seção */}
          {teamColab.map((collaborator) => (
            <Card key={collaborator} collaborator={collaborator} />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
