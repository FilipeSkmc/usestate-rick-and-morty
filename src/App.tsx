import './App.css';
import { Route, Routes } from 'react-router-dom';
import Personagens from './pages/Personagens';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/personagens" element={ <Personagens /> } />
        </Route>
        <Route path="*" element={ <h1>Not Found</h1> } />
      </Routes>
    </div>
  );
}

export default App;
