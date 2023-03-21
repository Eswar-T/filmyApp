import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmList from './pages/Filmlist';
import FilmDetail from './pages/FilmDetail';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/:id" element={<FilmDetail />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
