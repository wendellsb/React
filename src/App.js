import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
//import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
//import Frase from './components/Frase';
//import List from './components/List';



function App() {
  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento numero="1"/>
      <Form />


    {/* 
    const nome = 'Maria'
    <h1>Testando CSS</h1>
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
