import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
//componente principal react
export default function App() {
  return (
    <div className="App-header">
      <Header />
      <main>
        <p>Componente do semestre 2024/2</p>
        {ListaDeDisciplinas()}
      </main>
      <Footer />
    </div>
  );
}
function ListaDeDisciplinas() {
  const [lista, setlista] = useState(['PW4', 'TC2', 'PDM']);
  const [novaDisciplina, setnovaDisciplina] = useState('');

  const handleChange = (event) => {
    setnovaDisciplina(event.target.value);
  };
  const adicionarDisciplina = () => {
    if (novaDisciplina.trim() !== '') {
      setlista([...lista, novaDisciplina]);
      setnovaDisciplina('');
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      adicionarDisciplina();
    }
  };
  return (
    <div>
      <h1>Lista de lista</h1>
      <input
        type="text"
        value={novaDisciplina}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Nova disciplina"
      />
      <button onClick={adicionarDisciplina}>Adicionar</button>
      <ul>
        {lista.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <div>
        <p>Selecione o turno:</p>
        <label>
          <input type="radio" name="options" value="M" checked /> Matutino
        </label>
        <label>
          <input type="radio" name="options" value="V" /> Vespertino
        </label>
        <label>
          <input type="radio" name="options" value="N" checked /> Noturno
        </label>
      </div>
    </div>
  );
}
