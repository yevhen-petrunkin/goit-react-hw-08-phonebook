import { createContext } from 'react';

const MediaContext = createContext({
  isMinimum: false,
  isSmall: true,
  isMedium: false,
  isLarge: false,
  isNotMinimum: true,
  isNotSmall: false,
  isNotLarge: true,
});

export default MediaContext;
