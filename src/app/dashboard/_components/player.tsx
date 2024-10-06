import { cn } from '@/lib/utils';
import {
  CirclePause,
  CirclePlay,
  Repeat1,
  RotateCcw,
  RotateCw,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';

export default function Player({
  musicLink,
  musicLogo,
  firm,
  licenseeName,
  description,
  settingActive,
}: {
  musicLink: string;
  musicLogo: string;
  firm: string;
  licenseeName: string;
  description: string;
  settingActive: boolean;
}) {
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

  return (
    <div
      className={cn(
        'flex justify-center items-center lg:w-[1100px] px-2',
        !settingActive ? 'h-screen' : 'mt-4'
      )}
    >
      <div
        className={cn(
          'flex justify-between gap-2 rounded-full p-8 w-full pr-12',
          !settingActive && 'h-[280px] bg-slate-200 shadow-lg'
        )}
      >
        <img
          src={musicLogo}
          className={cn(
            'rounded-full object-cover hidden',
            !settingActive && 'block'
          )}
        />
        <div
          className={cn(
            'flex-1 flex flex-col gap-4 px-4 justify-between',
            settingActive && 'w-[664px]'
          )}
        >
          <div className=''>
            <p className='text-sm uppercase font-semibold'>{firm}</p>
            <div className='flex justify-between'>
              <div className='flex-1'>
                <p
                  className={cn(
                    'text-3xl tracking-tight flex-1 font-semibold',
                    settingActive && 'text-lg'
                  )}
                >
                  {licenseeName}
                </p>
                <p
                  className={cn(
                    'tracking-tight text-gray-400',
                    settingActive && 'hidden'
                  )}
                >
                  {description}
                </p>
              </div>
              <div className='pt-4 flex gap-4'>
                <RotateCcw
                  className='w-8 h-8 cursor-pointer'
                  onClick={backwardVideo}
                />
                {play ? (
                  <CirclePause
                    className='w-8 h-8 cursor-pointer'
                    onClick={toggleVideo}
                  />
                ) : (
                  <CirclePlay
                    className='w-8 h-8 cursor-pointer'
                    onClick={toggleVideo}
                  />
                )}
                <RotateCw
                  className='w-8 h-8 cursor-pointer'
                  onClick={forwardVideo}
                />
                <Repeat1
                  className={cn(
                    'w-8 h-8 cursor-pointer',
                    loop && 'text-[var(--primary-custom)]'
                  )}
                  onClick={toggleLoop}
                />
              </div>
              <ReactHlsPlayer
                className='hidden'
                controls={true}
                loop={loop}
                playerRef={playerRef}
                autoPlay={false}
                src={musicLink}
              />
            </div>
          </div>
          {/* progress bar */}
          <div className=''>
            <progress
              value={percentage}
              className='w-full fill-slate-50'
              max={100}
              color='green'
            ></progress>
            <div className='flex justify-between'>
              <p id='timer1'>00:00</p>
              <p id='timer2'>00:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
