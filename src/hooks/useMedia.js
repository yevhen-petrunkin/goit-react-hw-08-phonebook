import { useContext } from 'react';
import MediaContext from 'components/Media/MediaContext';

export const useMedia = () => {
  const media = useContext(MediaContext);
  return media;
};
