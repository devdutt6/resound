import { toast } from '@/hooks/use-toast';
import { Track } from '@/lib/interfaces/getTrack.interface';
import { Call } from '@/lib/utils';
import { useContext, useEffect, useState } from 'react';
import { TrackResponse, WebsiteContext } from '../../context/context';

export const useDashboard = () => {
  const [settingActive, setSettingActive] = useState<boolean>(false);
  const websiteOptions = useContext(WebsiteContext);
  const [track, setTrack] = useState<Track | null>(null);

  const toggleSetting = () => {
    setSettingActive((v) => !v);
  };

  useEffect(() => {
    Call<TrackResponse>('/music/get-track', true)
      .then((data) => {
        setTrack(data.data[0]);
      })
      .catch((err) => {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Failed to fetch the track',
          description: err.message,
        });
      });
  }, []);

  return { toggleSetting, settingActive, websiteOptions, track };
};
