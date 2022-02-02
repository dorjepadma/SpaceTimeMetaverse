import SpinningCube from './components/spinningCube/spinningCube.component.jsx';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Space Time Metaverse
      </header>
       <SpinningCube />
       <div>
       <Typography variant="h6" color='white' >
  Policy ID: 358f48405d151ecbc59358594fe9904e4d6cd5f9106bc0c6e75ad738
</Typography>
       </div>
    </div>
  );
}

export default App;
