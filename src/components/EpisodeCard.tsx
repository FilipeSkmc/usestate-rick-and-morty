import { EpisodeType } from '../utils/types';

type EpisodeCardProps = {
  episode: EpisodeType
};

function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <div className="card">
      <h4>{episode.name}</h4>
      <p>{episode.air_date}</p>
      <p>{episode.episode}</p>
    </div>
  );
}

export default EpisodeCard;
