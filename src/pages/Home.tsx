import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyDispatch, RootReducerType } from '../utils/types';
import Loading from '../components/Loading';
import EpisodeCard from '../components/EpisodeCard';
import './Home.css';
import { fetchEpisodes } from '../redux/actions';

function Home() {
  // useSelector é um hook que permite acessar o estado global, estou usando para pegar o array de episódios
  const { episodes } = useSelector((state: RootReducerType) => state);
  // o useDispatch é um hook que permite disparar uma action para o reducer
  const dispatch: AnyDispatch = useDispatch();

  // useEffect que faz a requisição da API
  useEffect(() => {
    // o dispatch dispara a action que faz a requisição da API, que no caso é uma action assíncrona
    dispatch(fetchEpisodes());
  }, []);

  // Se o arrau de episodios estiver vazio, renderiza o componente Loading
  if (episodes.length < 1) return (<Loading />);
  return (
    <>
      <h2>Lista de episódios</h2>

      <div className="container">
        {episodes.map((episode) => (
          <EpisodeCard key={ episode.id } episode={ episode } />
        ))}
      </div>
    </>
  );
}

export default Home;
