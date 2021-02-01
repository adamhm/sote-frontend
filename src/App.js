import './App.css';
import Routes from './routes';

function App() {
    const url = process.env.REACT_APP_URL;
  return (
    <div className="App">
        <h6>current backend url:{url}</h6>
      <Routes />
    </div>
  );
}

export default App;
