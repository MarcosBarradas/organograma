import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Formulary.css";

const Formulary = ({ onCollaboratorAdded, teams }) => {
  const [inputName, setName] = useState("");
  const [inputPosition, setPosition] = useState("");
  const [inputImage, setImage] = useState("");
  const [selectTeam, setTeam] = useState("Programação");

  const timesAlura = teams.map((item) => item.name);

  const whenSaving = (event) => {
    event.preventDefault();
    onCollaboratorAdded({
      inputName,
      inputImage,
      inputPosition,
      selectTeam,
    });
    setImage('')
    setName('')
    setPosition('')
    setTeam('Programação')
  };

  return (
    <section className="formulary">
      <form onSubmit={whenSaving}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          theValue={inputName}
          whenAltered={(theValue) => setName(theValue)}
          obligated={true}
          label="nome"
          placeholder="digite seu nome"
        />
        <TextField
          theValue={inputPosition}
          whenAltered={(theValue) => setPosition(theValue)}
          obligated={true}
          label="cargo"
          placeholder="digite seu cargo"
        />
        <TextField
          theValue={inputImage}
          whenAltered={(theValue) => setImage(theValue)}
          label="imagem (opcional)"
          placeholder="digite o endereço da imagem"
        />
        <DropDown
          theValue={selectTeam}
          whenAltered={(theValue) => setTeam(theValue)}
          obligated={true}
          label="Time"
          items={timesAlura}
        />
        <Button text="Criar card">Criar card</Button>
      </form>
    </section>
  );
};

export default Formulary;
