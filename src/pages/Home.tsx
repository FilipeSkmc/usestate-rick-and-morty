import { useEffect, useState } from 'react';
import { getEpisodes } from '../services/fetchAPI';
import { EpisodeType } from '../utils/types';
import Loading from '../components/Loading';
import './Home.css';

function Home() {
  const [episodios, setEpisodios] = useState<EpisodeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingData = async () => {
      const data = await getEpisodes();
      console.log(data);
      setEpisodios(data);
      setLoading(false);
    };

    const timer = setTimeout(() => {
      loadingData();
    }, 3000);

    return () => {
      clearTimeout(timer);
      console.log('clearTimeout');
    };
  }, []);

  if (loading) return (<Loading />);
  return (
    <>
      <h2>Lista de episódios</h2>

      <div className="container">
        {episodios.map((episodio) => (
          <div key={ episodio.id } className="card">
            <h4>{episodio.name}</h4>
            <p>{episodio.air_date}</p>
            <p>{episodio.episode}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
