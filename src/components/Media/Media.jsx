import { useMediaQuery } from '@mui/material';
import MediaContext from './MediaContext';

export const Media = ({ children }) => {
  const isMinimum = useMediaQuery('(min-width: 320px)', '(max-width: 479px)');
  const isSmall = useMediaQuery('(min-width: 480px)', '(max-width: 767px)');
  const isMedium = useMediaQuery('(min-width: 768px)', '(max-width: 899px)');
  const isLarge = useMediaQuery('(min-width: 900px)', '(max-width: 992px)');
  const isNotMinimum = !isMinimum;
  const isNotSmall = !isSmall;
  const isNotLarge = !isLarge;

  return (
    <MediaContext.Provider
      value={{
        isMinimum,
        isSmall,
        isMedium,
        isLarge,
        isNotMinimum,
        isNotSmall,
        isNotLarge,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
