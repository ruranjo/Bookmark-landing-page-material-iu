import { Box, Button, SxProps, Typography } from '@mui/material';
import React from 'react'
import {  rubikFontFamily, softBlue, veryDarkBlue, white } from '../../styles/variables';
import { iconFacebook, iconTwitter, logoBookmark } from '../../utils/assets';

export interface Props {

}

export interface styledFooter {
    mainContainer: SxProps;
    footerContainer: SxProps;
    buttonContainer: SxProps;
    button: SxProps;
    title: SxProps;
    subTitle: SxProps;
    textHeader: SxProps;
    navbarBox: SxProps;
    logo: SxProps;
    buttonNavbarContainer: SxProps;
    footerButton: SxProps;
    icon: SxProps;
    icons: SxProps;
  }
  
  const footerStyle: styledFooter = {
    mainContainer:{
      //border:'1px solid red',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-between',
      width:'100%',
      margin:0,
      backgroundColor: softBlue,
      paddingTop:0,
      gap:2,
      '@media screen and (max-width: 440px)': {
        height:'auto',
      },
    },

    footerContainer:{
      //border:'1px solid red',
      display:'flex',
      justifyContent:'center',
      width:'100%',
      margin:0,
      '@media screen and (max-width: 880px)': {
        height:'auto',
        flexDirection:'column-reverse',
        alignItems:'center',
        width:'100%',
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
      justifyContent:'center',
      textAlign:'center',
      fontSize:'2rem',
      color: white,
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
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      maxWidth:'480px',
      color: white,
      opacity:0.9,
      fontFamily: rubikFontFamily + ' !important',
      '@media screen and (max-width: 880px)': {
        justifyContent:'center',
        textAlign:'center',
      },
    },
    textHeader:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:5,
        marginBottom:'3rem',
        marginTop:'3rem'
    },
    navbarBox:{
        //border:'1px solid red',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        height: '15%',
        minHeight:'100px',
        width:'100%',
        
        backgroundColor: veryDarkBlue,
        '@media screen and (max-width: 440px)': {
          height:'auto',
          width:'100%',
        },
      },
    
      logo:{
        width:'auto',
        backgroundColor:white,
        display:'flex',
        justifyContent:'center',
        borderRadius:'50px',
        '@media screen and (max-width: 440px)': {
        },
      },
      icon:{
        
        '@media screen and (max-width: 440px)': {
        },
      },
      icons:{
        display:'flex',
        gap:3,
        '@media screen and (max-width: 440px)': {
        },
      },
    
      buttonNavbarContainer:{
        //border:'1px solid red',
        display:'flex',
        justifyContent:'space-between',
        
        width:'40%',
        gap:'1rem',
        '@media screen and (max-width: 880px)': {
          display:'none',
        },
      },
    
      footerButton:{
        color:white,
        fontFamily: rubikFontFamily + ' !important',
      },
  }



export interface Props {
    
}

const Footer:React.FC<Props> = () => {
        
    return (
        <Box sx={footerStyle.mainContainer}>
            <Box sx={footerStyle.textHeader}>
                <Typography variant='subtitle1' sx={footerStyle.subTitle}>
                    35,000+ already joined
                </Typography>
                <Typography variant='h2' sx={footerStyle.title}>
                    Stay up-to-date with what we’re doing
                </Typography>
                
                <Button sx={footerStyle.footerButton}  color='secondary' variant='contained' >Contact Us</Button>
                
            </Box>
            <Box  sx={footerStyle.navbarBox}>
                <Box sx={footerStyle.buttonNavbarContainer}>
                    <Box sx={footerStyle.logo}>
                        <img src={logoBookmark} alt="logoBookmark" />
                    </Box>
    
                    <Button sx={footerStyle.footerButton}  color='info' variant='text' >FEATURES</Button>
                    <Button sx={footerStyle.footerButton}  color='info' variant='text' >PRICING</Button>
                    <Button sx={footerStyle.footerButton}  color='info' variant='text' >CONTACT</Button>
                </Box>
                <Box sx={footerStyle.icons}>
                    <Box sx={footerStyle.icon}>
                        <img src={iconTwitter} alt="logoBookmark" />
                    </Box>

                    <Box sx={footerStyle.icon}>
                        <img src={iconFacebook} alt="logoBookmark" />
                    </Box>
                </Box>
            </Box>
        </Box>
      )
}

export default Footer
