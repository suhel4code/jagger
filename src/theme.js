import { createTheme } from '@mui/material/styles';
import { amber, green, grey, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    secondary: {
      main: grey[400],
    },
    reviewColor: {
      main: amber[600],
    },
  },
});
