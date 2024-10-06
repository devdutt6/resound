'use client';

import { cn } from '@/lib/utils';
import Settings from './_components/settings';
import { useDashboard } from './_hooks/use-dashboard';

export default function Page() {
  const { settingActive, toggleSetting, websiteOptions } = useDashboard();

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
      <div
        className={cn(
          'flex justify-center items-center lg:w-[1100px]',
          !settingActive ? 'h-screen' : 'mt-4'
        )}
      >
        <div
          className={cn(
            'flex justify-between gap-2 rounded-full p-6',
            !settingActive && 'h-[224px] bg-slate-200'
          )}
        >
          <img
            src={
              websiteOptions?.appStatus.licensee.logo.player_image &&
              'https://api.yourharmony.ai/images/user-image.png' // TODO remove the fallback
            }
            className={cn(
              'rounded-full object-cover hidden',
              !settingActive && 'block'
            )}
          />
          <div
            className={cn(
              'flex-1 flex flex-col gap-4 px-4',
              settingActive && 'w-[664px]'
            )}
          >
            <p className='text-sm text-zinc-300 uppercase font-semibold'>
              {websiteOptions?.appStatus.licensee.firm}
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex-1'>
                <p
                  className={cn(
                    'text-3xl tracking-tight flex-1',
                    settingActive && 'text-lg font-semibold'
                  )}
                >
                  {websiteOptions?.appStatus.licensee.name?.split(' ')?.at(0) ||
                    ''}
                </p>
                <p
                  className={cn(
                    'tracking-tight text-gray-400',
                    settingActive && 'hidden'
                  )}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis nisi sit necessitatibus facilis nobis obcaecati, culpa
                </p>
              </div>
              <p className='tracking-tight'>
                Player controls asjdkaks adasnjd aksdaiud
              </p>
            </div>
            <div className='border-2 border-gray-400'></div>
          </div>
        </div>
      </div>
    </main>
  );
}
