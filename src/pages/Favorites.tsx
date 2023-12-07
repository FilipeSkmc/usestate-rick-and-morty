import { useSelector } from 'react-redux';
import { RootReducerType } from '../utils/types';
import CharacterCard from '../components/CharacterCard';

function Favorites() {
  const favorites = useSelector((state: RootReducerType) => state.characters.favorites);

  return (
    <>
      <h2>Personagens Favoritos</h2>
      <div className="list-personagens">
        {
          favorites.length > 0 ? (
            favorites.map((character, index) => (
              <CharacterCard
                key={ index }
                character={ character }
              />
            ))
          ) : (
            <p>Nenhum personagem favorito</p>
          )
        }
      </div>
    </>
  );
}

export default Favorites;
