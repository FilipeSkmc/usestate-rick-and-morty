import { useEffect, useState } from 'react';
import { getCharacters } from '../services/fetchAPI';
import Loading from '../components/Loading';
import { CharacterType } from '../utils/types';
import './Characters.css';
import CharacterCard from '../components/CharacterCard';

function Characters() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Para usar o async/await dentro do useEffect, é necessário criar uma função
    const loadingData = async () => {
      const data = await getCharacters(page);
      setCharacters(data);
      setLoading(false);
    };

    // chama a função
    loadingData();

    // o page é uma dependência do useEffect, então toda vez que ele mudar,
    // o useEffect será executado novamente, assim,
    // fazendo uma nova requisição para a API, com o novo valor de page
  }, [page]);

  // Se o loading for true, renderiza o componente Loading
  if (loading) return <Loading />;
  return (
    <>
      <h2>Personagens</h2>
      <div className="options">
        <button
          disabled={ page <= 1 }
          onClick={ () => setPage(page - 1) }
        >
          Anterior
        </button>

        <span>{`Página ${page}`}</span>

        <button
          disabled={ page >= 3 }
          onClick={ () => setPage(page + 1) }
        >
          Próximo
        </button>
      </div>

      <div className="list-personagens">
        {characters.map((character) => (
          <CharacterCard
            key={ character.id }
            character={ character }
          />
        ))}
      </div>
    </>
  );
}

export default Characters;
