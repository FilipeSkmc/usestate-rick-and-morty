import { useDispatch, useSelector } from 'react-redux';
import { CharacterType, RootReducerType } from '../utils/types';
import { addFavorite, removeFavorite } from '../redux/actions';

type CharacterCardProps = {
  character: CharacterType,
};

function CharacterCard({ character }: CharacterCardProps) {
  const favorites = useSelector((state: RootReducerType) => state.characters.favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.some((favorite) => favorite.id === character.id);

  const handleFavorite = () => {
    if (isFavorite) {
      return dispatch(removeFavorite(character));
    }

    dispatch(addFavorite(character));
  };

  return (
    <div
      className="persona-card"
    >
      <h4>{character.name}</h4>
      <img src={ character.image } alt={ character.name } />
      <p>{character.status}</p>
      <p>{character.species}</p>

      <label htmlFor={ `${character.name}-favorite` }>
        <input
          id={ `${character.name}-favorite` }
          type="checkbox"
          checked={ isFavorite }
          onChange={ handleFavorite }
          style={ { cursor: 'pointer', display: 'none' } }
        />
        <p>{ isFavorite ? '♥︎' : '♡' }</p>
      </label>

    </div>
  );
}

export default CharacterCard;
