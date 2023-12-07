import './App.css';
import { Route, Routes } from 'react-router-dom';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Layout from './components/Layout';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/personagens" element={ <Characters /> } />
          <Route path="/favoritos" element={ <Favorites /> } />
        </Route>
        <Route path="*" element={ <h1>Not Found</h1> } />
      </Routes>
    </div>
  );
}

export default App;
