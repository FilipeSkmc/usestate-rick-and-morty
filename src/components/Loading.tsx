import portal from '../assets/portal.gif';
import './Loading.css';

function Loading() {
  return (
    <div>
      <img src={ portal } alt="Portal" className="loading" />
    </div>
  );
}

export default Loading;
