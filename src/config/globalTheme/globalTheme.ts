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