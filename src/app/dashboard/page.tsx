'use client';

import { cn } from '@/lib/utils';
import Player from './_components/player';
import Settings from './_components/settings';
import { useDashboard } from './_hooks/use-dashboard';

export default function Page() {
  const { settingActive, toggleSetting, websiteOptions, track } =
    useDashboard();

  return (
    <main className='flex flex-col items-center'>
      <nav className='py-4 flex items-center lg:w-[1100px] px-4 mx-auto w-full'>
        <div
          className='flex justify-center items-center flex-col uppercase font-semibold hover:text-[var(--primary-custom)] cursor-pointer'
          onClick={toggleSetting}
        >
          <span
            className={cn(
              settingActive ? '' : 'font-bold text-[var(--primary-custom)]'
            )}
          >
            Home
          </span>
          {!settingActive && (
            <p className='border-4 border-black rounded-full'></p>
          )}
        </div>
        <a href='/' className='flex justify-center flex-1 shrink-0'>
          <img
            src='https://api.yourharmony.ai/storage/licensees/logos/SC2DLs41zylCEsVjuAUSDPZFzIXF9DmZsCJqgNMZ.png'
            className='block object-center min-w-[149px] max-w-[150px] cursor-pointer'
          />
        </a>
        <div
          className='flex justify-center items-center flex-col uppercase font-semibold hover:text-[var(--primary-custom)] cursor-pointer'
          onClick={toggleSetting}
        >
          <span
            className={cn(
              !settingActive ? '' : 'font-bold text-[var(--primary-custom)]'
            )}
          >
            Settings
          </span>
          {settingActive && (
            <p className='border-4 border-black rounded-full'></p>
          )}
        </div>
      </nav>
      {/* Settings modal */}
      {settingActive && <Settings websiteOptions={websiteOptions} />}
      {/* music player */}
      {track ? (
        <Player
          musicLink={track.link}
          firm={track.artist}
          description={track.description}
          licenseeName={track.title}
          musicLogo={track.image}
          settingActive={settingActive}
        />
      ) : (
        <div className='flex flex-1 justify-center items-center h-screen'>
          No Tracks has been assigned yet, please wait till one gets assigned
        </div>
      )}
    </main>
  );
}
