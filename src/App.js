import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulary from "./componentes/Formulary";
import Team from "./componentes/Team";
import Footer from "./componentes/Footer"

function App() {
  const [collaborators, setCollabolator] = useState([]);

  const addCollaborator = (collaborator) => {
    console.log(collaborators);
    setCollabolator([...collaborators, collaborator]);
  };

  const teams = [
    {
      name: "Programação",
      firstColor: "#57C278",
      secondColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      firstColor: "#82CFFA",
      secondColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      firstColor: "#A6D157",
      secondColor: "#F0F8E2",
    },
    {
      name: "Devops",
      firstColor: "#E06B69",
      secondColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      firstColor: "#DB6EBF",
      secondColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      firstColor: "#FFBA05",
      secondColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      firstColor: "#FF8A29",
      secondColor: "#FFEEDF",
    },
  ];

  return (
    <div className="App">
      <Banner />
      <Formulary
        teams={teams}
        onCollaboratorAdded={(collaborator) => addCollaborator(collaborator)}
      />
      {teams.map((item) => (
        <Team key={item.name} team={item} collaborators={collaborators}></Team>
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
