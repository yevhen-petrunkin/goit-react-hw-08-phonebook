import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const linkRefs = [
  {
    id: 1,
    icon: <LinkedInIcon sx={{ width: '30px', height: '30px' }} />,
    link: 'https://www.linkedin.com/in/yevhen-petrunkin/',
  },
  {
    id: 2,
    icon: <GitHubIcon sx={{ width: '30px', height: '30px' }} />,
    link: 'https://github.com/yevhen-petrunkin/phonebook-06-react',
  },
  {
    id: 3,
    icon: <FacebookIcon sx={{ width: '30px', height: '30px' }} />,
    link: 'https://www.facebook.com/profile.php?id=100011788286630',
  },
];

export default linkRefs;
