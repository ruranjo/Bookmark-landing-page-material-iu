import React, { CSSProperties, useState } from 'react'
import { grayishBlue, rubikFontFamily, softRed, veryDarkBlue } from '../../styles/variables';
import { Button, SxProps, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FeactureType } from '../../intefaces/feacture.interface';

export interface styledHeroSection {
    mainContainer: SxProps;
    feactureContainer: SxProps;
    feacturePicture: SxProps;
    buttonContainer: SxProps;
    button: SxProps;
    leftBox: SxProps;
    rightBox: SxProps;
    title: SxProps;
    subTitle: SxProps;
    tagsBox: SxProps;
    tagTitle: SxProps;
    tagSubtitle: SxProps;
    textHeader: SxProps;
    tagSelector: SxProps;
    img: CSSProperties;
    
    
  }
  
  const feacturesSectionStyle: styledHeroSection = {
    mainContainer:{
      //border:'1px solid red',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-between',
      width:'100%',
      margin:0,
      paddingTop:'2rem',
      gap:2,
      '@media screen and (max-width: 440px)': {
        height:'auto',
      },
    },

    feactureContainer:{
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

    rightBox:{
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
    leftBox:{
        //border:'1px solid blue',
        position:'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
        width:'50%',
      '@media screen and (max-width: 880px)': {
        marginBottom:'2rem',
        width:'100%',
      },
    },
    feacturePicture:{
        //border:'1px solid green', 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'500px',
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
      justifyContent:'center',
      textAlign:'center',
      fontSize:'2rem',
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
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      maxWidth:'480px',
      color: grayishBlue,
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
        gap:5
    },
    tagTitle:{
      //border:'1px solid black',
      display:'flex',

      fontSize:'2rem',
      color: veryDarkBlue,
      fontWeight:'500 !important',
      fontFamily: rubikFontFamily + ' !important',
      '@media screen and (max-width: 880px)': {
        justifyContent:'center',
        textAlign:'center',
        fontSize:'2.5rem',
      },
    },
    tagSelector:{
        
    },
    tagSubtitle:{
      //border:'1px solid black',
      display:'flex',
      
      maxWidth:'480px',
      color: grayishBlue,
      
      fontFamily: rubikFontFamily + ' !important',
      '@media screen and (max-width: 880px)': {
        justifyContent:'center',
        textAlign:'center',
      },
    },
    img:{
          
        width: '100%',
        maxWidth: '400px',
        maxHeight: '400px',
        height:'auto',
    },
   
    tagsBox:{
        display:'flex',
        gap:8,
        cursor:'pointer',
    }
  }



export interface Props {
    feactures: FeactureType[]
}

const FeacturesSection:React.FC<Props> = ({feactures}) => {
    const [currentFeacture, setCurrentFeacture] = useState<FeactureType>(feactures[0]);
    
    const handleChangeFeacture = (index:number) => {
        setCurrentFeacture(feactures[index]);
    }
    
    return (
        <Box sx={feacturesSectionStyle.mainContainer}>

            <Box sx={feacturesSectionStyle.textHeader}>
                <Typography variant='h2' sx={feacturesSectionStyle.title}>
                    Feactures
                </Typography>
                <Typography variant='subtitle1' sx={feacturesSectionStyle.subTitle}>
                Our aim is to make it quick and easy for you to access your favourite websites. 
                Your bookmarks sync between your devices so you can access them on the go.
                </Typography>
            </Box>

            <Box sx={feacturesSectionStyle.tagsBox}>
                {
                    feactures.map((feacture,index)=>{
                        return (
                        <Box sx={ {...feacturesSectionStyle.tagSelector, borderBottom: feacture.title ===  currentFeacture.title ? '5px solid '+softRed : ''}} onClick={()=>handleChangeFeacture(index)} key={index}>
                            <Typography variant='h6' >{feacture.tag}</Typography>
                        </Box>
                        )
                    })
                }
            </Box>

          <Box sx={feacturesSectionStyle.feactureContainer}>
            
            <Box sx={feacturesSectionStyle.leftBox}>
              <Box sx={feacturesSectionStyle.feacturePicture}>
                <img style={feacturesSectionStyle.img}  src={currentFeacture.picture} alt="hero" />
              </Box>
              
            </Box>

            <Box sx={feacturesSectionStyle.rightBox}>
              <Typography variant='h1' sx={feacturesSectionStyle.tagTitle}>
                {currentFeacture.title}
              </Typography>
              <Typography variant='subtitle1' sx={feacturesSectionStyle.tagSubtitle}>
                {currentFeacture.description}
              </Typography>
              <Box sx={feacturesSectionStyle.buttonContainer}>
                <Button sx={feacturesSectionStyle.button}  color='primary' variant='contained' >More info</Button>
              </Box>
            </Box>

          </Box>
        </Box>
      )
}

export default FeacturesSection