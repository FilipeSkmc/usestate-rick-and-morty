import { CharacterType } from '../utils/types';

type CharacterCardProps = {
  character: CharacterType,
};

function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="persona-card">
      <h4>{character.name}</h4>
      <img src={ character.image } alt={ character.name } />
      <p>{character.status}</p>
      <p>{character.species}</p>
    </div>
  );
}

export default CharacterCard;
