import './App.css';
import Condicional from './components/Condicional';
//import Evento from './components/Evento';
//import Form from './components/Form';
//import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
//import Frase from './components/Frase';
//import List from './components/List';



function App() {
  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />


    {/* 
    const nome = 'Maria'
    <h1>Testando CSS</h1>
    <Evento numero="1"/>
      <Form />
      <Frase />
      <Frase />
      <SayMyName nome="Wendell" />
      <SayMyName nome="Juliany" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="programador" 
        foto="https://via.placeholder.com/150" />

        <List />
    */}
    </div>
  );
}

export default App;
