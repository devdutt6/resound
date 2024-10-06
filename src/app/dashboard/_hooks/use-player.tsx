import { useEffect, useRef, useState } from 'react';

export function usePlayer() {
  const [loop, setLoop] = useState(false);
  const [play, setPlay] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const playerRef = useRef<HTMLVideoElement | null>(null);

  function toggleVideo() {
    if (play) {
      playerRef.current?.pause();
    } else {
      playerRef.current?.play();
    }
    setPlay(!play);
  }
  function toggleLoop() {
    setLoop((v) => !v);
  }
  function backwardVideo() {
    if (playerRef.current)
      playerRef.current.currentTime = playerRef.current.currentTime - 5;
  }
  function forwardVideo() {
    if (playerRef.current)
      playerRef.current.currentTime = playerRef.current.currentTime + 5;
  }
  function setTimeFormatted(time: number, id: string) {
    let mins = Math.floor(time / 60) + '';
    let secs = Math.floor(time % 60) + '';
    secs = String(secs).padStart(2, '0');
    mins = String(mins).padStart(2, '0');
    const timer = document.getElementById(id);
    if (timer) timer.innerHTML = mins + ':' + secs;
  }

  useEffect(() => {
    let update = setInterval(function () {
      if (play && playerRef.current && playerRef.current.currentTime)
        setTimeFormatted(playerRef.current.currentTime, 'timer1');

      if (playerRef.current && playerRef.current.duration)
        setTimeFormatted(playerRef.current.duration, 'timer2');

      if (
        playerRef.current &&
        playerRef.current.currentTime > 0 &&
        playerRef.current.duration > 0
      ) {
        setPercentage(
          (playerRef.current.currentTime * 100) / playerRef.current.duration
        );
      }
    }, 1000);

    return () => clearInterval(update);
  }, [playerRef, play]);

  return {
    loop,
    play,
    percentage,
    playerRef,
    toggleVideo,
    toggleLoop,
    backwardVideo,
    forwardVideo,
  };
}
