import { Box, Button, SxProps, Typography } from '@mui/material'
import React, { CSSProperties } from 'react'
import { hero } from '../../utils/assets';
import { grayishBlue, rubikFontFamily, softBlue, veryDarkBlue } from '../../styles/variables';

export interface styledHeroSection {
    mainContainer: SxProps;
    heroContainer: SxProps;
    heroPicture: SxProps;
    buttonContainer: SxProps;
    button: SxProps;
    leftBox: SxProps;
    rightBox: SxProps;
    title: SxProps;
    subTitle: SxProps;
    blueRetangular: SxProps;
    img: CSSProperties;
  }
  
  const heroSectionStyle: styledHeroSection = {
    mainContainer:{
      //border:'1px solid red',
      display:'flex',
      justifyContent:'center',
      width:'100%',
      margin:0,
      '@media screen and (max-width: 440px)': {
        height:'auto',
      },
    },

    heroContainer:{
      //border:'1px solid red',
      display:'flex',
      justifyContent:'center',
      width:'80%',
      margin:0,
      '@media screen and (max-width: 880px)': {
        height:'auto',
        flexDirection:'column-reverse',
        alignItems:'center',
        width:'100%',
      },
    },

    leftBox:{
      //border:'1px solid blue',
      width:'50%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      '@media screen and (max-width: 880px)': {
        width:'100%',
        alignItems:'center',
        gap:3
      },
    },
    rightBox:{
      position:'relative',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      //border:'1px solid blue',
      width:'50%',
      '@media screen and (max-width: 880px)': {
        marginBottom:'2rem',
        width:'100%',
      },
    },
    heroPicture:{
      //border:'1px solid black',
      
      width:'100%',
      height:'auto',
      '@media screen and (max-width: 880px)': {
        width:'80%',
      },
    },
  
    buttonContainer:{
      display:'flex',
      gap:2,
    },
  
    button:{
      textTransform: 'none',
      fontWeight:'700',
    },
    title:{
      //border:'1px solid black',
      display:'flex',

      fontSize:'3rem',
      color: veryDarkBlue,
      fontWeight:'500 !important',
      fontFamily: rubikFontFamily + ' !important',
      '@media screen and (max-width: 880px)': {
        justifyContent:'center',
        textAlign:'center',
        fontSize:'2.5rem',
      },
    },
    subTitle:{
      //border:'1px solid black',
      display:'flex',

      maxWidth:'480px',
      color: grayishBlue,
      opacity:0.9,
      fontFamily: rubikFontFamily + ' !important',
      '@media screen and (max-width: 880px)': {
        justifyContent:'center',
        textAlign:'center',
      },
    },
    img:{
      width: '100%',
      height:'auto',
    },
    blueRetangular:{
      position:'absolute',
      right:0,
      zIndex:-10,
      top:'25%',
      width:'100%',
      height:'80%',
      maxWidth:'450px',
      maxHeight:'260px',
      minHeight:'100px',
      borderRadius: '100px 10px 10px 100px',
      backgroundColor: softBlue,
      '@media screen and (max-width: 880px)': {
        width:'80%',
      },
    }
  }


const HeroSection:React.FC<{}> = () => {
    return (
        <Box sx={heroSectionStyle.mainContainer}>

          
            
          

          <Box sx={heroSectionStyle.heroContainer}>
            
            <Box sx={heroSectionStyle.leftBox}>
              <Typography variant='h1' sx={heroSectionStyle.title}>
                A Simple Bookmark Manager
              </Typography>
              <Typography variant='subtitle1' sx={heroSectionStyle.subTitle}>
                A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.
              </Typography>
              <Box sx={heroSectionStyle.buttonContainer}>
                <Button sx={heroSectionStyle.button}  color='primary' variant='contained' >Get it on Chrome</Button>
                <Button sx={heroSectionStyle.button}  color='success' variant='contained' >Get it on Firefox</Button>
              </Box>
            </Box>

            <Box sx={heroSectionStyle.rightBox}>
              <Box sx={heroSectionStyle.heroPicture}>
                <img style={heroSectionStyle.img}  src={hero} alt="hero" />
              </Box>
              <Box sx={heroSectionStyle.blueRetangular}>

              </Box>
            </Box>

          </Box>
        </Box>
      )
}

export default HeroSection