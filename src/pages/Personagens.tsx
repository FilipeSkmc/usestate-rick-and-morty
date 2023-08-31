import { useEffect, useState } from 'react';
import { getCharacters } from '../services/fetchAPI';
import Loading from '../components/Loading';
import { CharacterType } from '../utils/types';
import './Personagens.css';

function Personagens() {
  const [page, setPage] = useState(1);
  const [personagens, setPersonagens] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const loadingData = async () => {
      const data = await getCharacters(page);
      setPersonagens(data);
      setLoading(false);
    };

    const timer = setTimeout(() => {
      loadingData();
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('clearTimeout');
    };
  }, [page]);

  const disablePrevPage = page === 1;
  const disableNextPage = page === 10;

  if (loading) return <Loading />;
  return (
    <>
      <h2>Personagens</h2>
      <div className="options">
        <button
          disabled={ disablePrevPage }
          onClick={ () => setPage(page - 1) }
        >
          Anterior
        </button>

        <span>{`Página ${page}`}</span>

        <button
          disabled={ disableNextPage }
          onClick={ () => setPage(page + 1) }
        >
          Próximo
        </button>
      </div>

      <div className="list-personagens">
        {personagens.map((personagem) => (
          <div key={ personagem.id } className="persona-card">
            <h4>{personagem.name}</h4>
            <img src={ personagem.image } alt={ personagem.name } />
            <p>{personagem.status}</p>
            <p>{personagem.species}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Personagens;
