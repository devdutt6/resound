import { useContext, useState } from 'react';
import { WebsiteContext } from '../../context/context';

export const useDashboard = () => {
  const [settingActive, setSettingActive] = useState<boolean>(false);
  const websiteOptions = useContext(WebsiteContext);

  const toggleSetting = () => {
    setSettingActive((v) => !v);
  };

  return { toggleSetting, settingActive, websiteOptions };
};
