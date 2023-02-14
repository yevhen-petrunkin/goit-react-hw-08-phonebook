import { FooterMenu, FooterLink } from './Footer.styled';
import Box from '@mui/material/Box';
import linkRefs from 'assets/linkRefs';

export const Footer = () => {
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
        py: 4,
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
