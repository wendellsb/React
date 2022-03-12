import './App.css';

function App() {

  const name = 'Wendell'

  const newName = name.toLocaleUpperCase()

  function sum(a, b)  {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, { name } </p>
      <p>Letra maiúscula: {newName} </p>
      <p>Soma: { 2 + 2 } </p>
      <p>Soma: {sum(1, 5)} </p>
      <img src={url} alt="img" />
    </div>
  );
}

export default App;
