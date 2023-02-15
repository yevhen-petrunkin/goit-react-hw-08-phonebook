import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUserEmail } from 'redux/selectors';
import { useMedia } from 'hooks/useMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

export const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const { isLarge, isSmall, isMedium } = useMedia();

  let typographyVar = 'subtitle1';

  if (isLarge) {
    typographyVar = 'h6';
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <PersonIcon />
        {(isSmall || isMedium || isLarge) && (
          <Typography variant={typographyVar} component="span">
            {email}
          </Typography>
        )}
      </Box>
      <Button
        variant="contained"
        size="small"
        sx={{
          my: 'auto',
          px: 1.5,
          py: 0.5,
          textTransform: 'none',
          color: 'black',
          bgcolor: 'rgb(239 239 239)',
          boxShadow: 3,
          ':hover': {
            bgcolor: 'white',
            color: 'black',
          },
        }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Box>
  );
};
