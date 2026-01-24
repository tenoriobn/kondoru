'use client';
import usePlayerScript from './usePlayerScript';
import './elegantShowcasePlayer.css';

export default function ElegantShowcasePlayer() {
  usePlayerScript('./video/rio-perdido.mp4');

  return <div id="player" />;
}
