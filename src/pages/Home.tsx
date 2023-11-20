import { useEffect, useState } from 'react';
import { getEpisodes } from '../services/fetchAPI';
import { EpisodeType } from '../utils/types';
import Loading from '../components/Loading';
import EpisodeCard from '../components/EpisodeCard';
import './Home.css';

function Home() {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect que faz a requisição da API
  useEffect(() => {
    // Para usar o async/await dentro do useEffect, é necessário criar uma função
    const loadingData = async () => {
      const data = await getEpisodes();
      setEpisodes(data);
      setLoading(false);
    };

    loadingData();
  }, []);

  // Se o loading for true, renderiza o componente Loading
  if (loading) return (<Loading />);
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
