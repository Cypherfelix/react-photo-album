
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Album from './pages/Album/Album';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="album">
                <Route path=":albumId" element={<Album />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
