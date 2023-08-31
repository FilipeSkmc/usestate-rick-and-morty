import { useEffect, useState } from 'react';
import { getEpisodes } from '../services/fetchAPI';
import { EpisodeType } from '../utils/types';
import Loading from '../components/Loading';
import './Home.css';

function Home() {
  const [episodios, setEpisodios] = useState<EpisodeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect que faz a requisição da API
  useEffect(() => {
    // Para usar o async/await dentro do useEffect, é necessário criar uma função
    const loadingData = async () => {
      const data = await getEpisodes();
      console.log(data);
      setEpisodios(data);
      setLoading(false);
    };

    // setTimeout para simular o carregamento da API
    const timer = setTimeout(() => {
      loadingData();
    }, 1000);

    // Limpa o setTimeout caso o componente seja desmontado
    return () => {
      clearTimeout(timer);
    };

    // Observação: Não é necessário usar o timer, estamos usando apenas para simular o carregamento da API, bastaria usar o loadingData() diretamente. Acesse o componente Personagens para ver um exemplo sem o timer.
  }, []);

  // Se o loading for true, renderiza o componente Loading
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
