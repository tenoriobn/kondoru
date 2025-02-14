import { useEffect, useState } from 'react';

const usePlayerScript = (videoSrc: string ) => {
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = './scripts/playerjs.js';
    script.async = true;
    script.onload = () => setIsPlayerLoaded(true);
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, [setIsPlayerLoaded]);

  useEffect(() => {
    if (isPlayerLoaded && window.Playerjs) {
      new window.Playerjs({
        id: 'player',
        file: videoSrc,
      });
    }
  }, [isPlayerLoaded, videoSrc]);
};

export default usePlayerScript;