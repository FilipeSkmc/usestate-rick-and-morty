import { useEffect /* useState */ } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { AnyDispatch, RootReducerType } from '../utils/types';
import CharacterCard from '../components/CharacterCard';

import './Characters.css';
import { fetchCharacters } from '../redux/actions';

function Characters() {
  // const [page, setPage] = useState(1);
  const { listCharacters: characters } = useSelector(
    (state: RootReducerType) => state.characters,
  );
  const dispatch: AnyDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(1));
  }, []);

  if (characters.length < 1) return <Loading />;
  return (
    <>
      <h2>Personagens</h2>
      {/* <div className="options">
        <button
          disabled={ page <= 1 }
          onClick={ () => setPage(page - 1) }
        >
          Anterior
        </button>

        <span>{`Página ${page}`}</span>

        <button
          disabled={ page >= 1 }
          onClick={ () => setPage(page + 1) }
        >
          Próximo
        </button>
      </div> */}

      <div className="list-personagens">
        {characters.map((character, index) => (
          <CharacterCard
            key={ index }
            character={ character }
          />
        ))}
      </div>
    </>
  );
}

export default Characters;
