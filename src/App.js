import Header from './components/header/header.component';
import SpinningCube from './components/spinningCube/spinningCube.component.jsx';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './components/ui/Theme.js';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header/>
    <div className="App">
       <SpinningCube />
       <div>
       <Typography variant="h3" color='white' >
      White List Minting Now</Typography>
       <Typography variant="h6" color='white' >
  Policy ID: 358f48405d151ecbc59358594fe9904e4d6cd5f9106bc0c6e75ad738
</Typography>
       </div>
    </div>
  </ThemeProvider>
  );
}

export default App;
