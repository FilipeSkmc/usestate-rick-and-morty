import { useEffect /* useState */ } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { AnyDispatch, RootReducerType } from '../utils/types';
import CharacterCard from '../components/CharacterCard';

import './Characters.css';
import { fetchCharacters } from '../redux/actions';

function Characters() {
  // pegando o array de personagens do estado global e o dispatch
  const { listCharacters: characters } = useSelector(
    (state: RootReducerType) => state.characters,
  );
  const dispatch: AnyDispatch = useDispatch();

  // useEffect que faz a requisição da API
  // disparando a action que faz a requisição da API, passando o número da página
  useEffect(() => {
    dispatch(fetchCharacters(1));
  }, []);

  // Se o array de personagens estiver vazio, renderiza o componente Loading
  if (characters.length < 1) return <Loading />;
  return (
    <>
      <h2>Personagens</h2>
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
