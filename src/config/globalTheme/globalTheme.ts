import { createTheme } from "@mui/material";
import { softBlue, softRed, veryDarkBlue, white } from "../../styles/variables";

 const theme = createTheme({
    palette: {
      background: {
        default: white, // Color de fondo personalizado
      },
      primary:{
        main: softBlue
      },
      secondary:{
        main: softRed
      },
      info:{
        main: veryDarkBlue
      },
      success:{
        main: white
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            margin: 0,
            padding: 0,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            // Estilos del TextField
          },
          
        },
      },
    },
});

export default theme;