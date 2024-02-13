
import { Box, SxProps } from '@mui/material';
import './App.css'
import { Container } from '@mui/system';
import { HeroSection, Navbar } from './components';

export interface styledApp {
  containerStyle: SxProps;
}

const appStyle: styledApp = {
  containerStyle:{
    border:'1px solid red', 
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100vh',
    margin:'0px',
    padding:'0px',
    '@media screen and (max-width: 440px)': {
      height:'auto',
    },
  },
}

const App:React.FC<{}> = () => {
  

  return (
    <>
    <Container maxWidth={false}  sx={appStyle.containerStyle}>
      <Navbar/>
      <HeroSection/>
    </Container>
    </>
  )
}

export default App
