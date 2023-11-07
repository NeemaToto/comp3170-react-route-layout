import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom'
import { config } from './routes/config';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {config}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
