import { createMuiTheme } from '@material-ui/core/styles';

const customTypography = {
  h1: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
  },
};

const theme = createMuiTheme({
  typography: customTypography,
});

export default theme;