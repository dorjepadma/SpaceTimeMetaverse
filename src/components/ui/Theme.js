import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
  palette: {
    primary: {
      
      main:'#000000'
    },
    secondary: {
      main: 'rgb(245, 114, 8)',

    },
  },
  typography: {
    fontFamily: 'Times New Roman',
    fontSize: 15,
    h1: { // incase h1 needs to have a separate fontFamily 
        fontFamily: 'Roboto',
        fontWeight: 15,
    },
    h3:{
      fontWeight: 300,
      fontSize: 21,
      
    }
 },
});

export default createTheme(theme)




