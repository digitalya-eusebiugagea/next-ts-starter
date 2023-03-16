import { createTheme } from '@mui/material/styles';

import { roboto } from './fonts';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
