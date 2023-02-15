import { FooterMenu, FooterLink } from './Footer.styled';
import { useMedia } from 'hooks/useMedia';
import Box from '@mui/material/Box';
import linkRefs from 'utils/linkRefs';

export const Footer = () => {
  const { isMedium } = useMedia();
  let footerPy = 2;

  if (isMedium) {
    footerPy = 4;
  }

  return (
    <Box
      as="footer"
      style={{
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      }}
      sx={{
        m: 0,
        px: 4,
        py: footerPy,
        bgcolor: '#1565c0',
        boxShadow: 3,
      }}
    >
      <FooterMenu>
        {linkRefs.map(ref => {
          const { id, icon, link } = ref;
          return (
            <li key={id}>
              <FooterLink href={link} target="_blank" rel="noopener">
                {icon}
              </FooterLink>
            </li>
          );
        })}
      </FooterMenu>
    </Box>
  );
};
