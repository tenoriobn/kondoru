// import './elegantShowcasePlayer.css';
import usePlayerScript from './usePlayerScript';

export default function ElegantShowCasePlayer() {
  usePlayerScript('./video/rio-perdido.mp4');

  return (
    <figure className="w-full h-full flex items-center justify-center">
      <div
        id="player"
        role="img"
        aria-label="Vídeo demonstrativo de uma residência de luxo, exibindo arquitetura e acabamentos sofisticados"
      />
    </figure>
  );
}
