
import { Box, SxProps } from '@mui/material';
import './App.css'
import { DownloadExtensionSection, FeacturesSection, Footer, FrequentAskedQuestions, HeroSection, Navbar } from './components';
import { FeactureType } from './intefaces/feacture.interface';
import { illustrationFeaturesTab1, illustrationFeaturesTab2, illustrationFeaturesTab3 } from './utils/assets'

export interface styledApp {
  containerStyle: SxProps;
}

const appStyle: styledApp = {
  containerStyle:{
    //border:'1px solid red', 
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    alignItems:'center',
    width:'100%',
    
    margin:'0px',
    padding:'0px',
    '@media screen and (max-width: 440px)': {
      height:'auto',
    },
  },
}

const feactures: FeactureType[] = [
  {
    tag:'Simple Bookmarking',
    title:'Bookmark in one click',
    description:'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    picture: illustrationFeaturesTab1,
    
  },
  {
    tag:'Speedy Searching',
    title:'Intelligent search',
    description:'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    picture:illustrationFeaturesTab2,
  },
  {
    tag:'Easy Sharing',
    title:'Share your bookmarks',
    description:'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    picture:illustrationFeaturesTab3,
  },
]

const App:React.FC<{}> = () => {
  

  return (
    <>
    <Box sx={appStyle.containerStyle}>
      <Navbar/>
      <HeroSection/>
      <FeacturesSection feactures={feactures} />
      <DownloadExtensionSection />
      <FrequentAskedQuestions/>
      <Footer/>
    </Box>
    </>
  )
}

export default App
