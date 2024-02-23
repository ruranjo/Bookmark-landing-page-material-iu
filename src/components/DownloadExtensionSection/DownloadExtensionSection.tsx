import React, { CSSProperties, useEffect, useState } from 'react'
import { grayishBlue, rubikFontFamily, veryDarkBlue } from '../../styles/variables';
import { SxProps, Typography } from '@mui/material';
import { Box } from '@mui/system';

import CardExtension from '../CardExtension/CardExtension';
import { extensionData } from '../../utils/data';


export interface styledHeroSection {
    mainContainer: SxProps;
    feactureContainer: SxProps;
    feacturePicture: SxProps;
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
      margin:'10rem',
      paddingTop:'2rem',
      gap:2,
      '@media screen and (max-width: 440px)': {
        height:'auto',
        margin:'0',
        marginBottom:'5rem'
      },
    },

    feactureContainer:{
      //border:'1px solid blue',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      gap:4,
      width:'100%',
      height:'60%',
      marginTop:'4rem',
      '@media screen and (max-width: 1000px)': {
        flexDirection:'column'
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
        marginLeft:'1rem',
        marginRight:'1rem',
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
}

const DownloadExtensionSection:React.FC<Props> = () => {
    
  const [separateY, _setSeparateY] = useState<number>(-40);
  const [anchoPantalla, setAnchoPantalla] = useState<number>(window.innerWidth);
  
  // Función para actualizar el ancho de la pantalla
  const actualizarAnchoPantalla = () => {
    setAnchoPantalla(window.innerWidth);
  };

  // Efecto para añadir el evento de cambio de tamaño al montar el componente
  useEffect(() => {
    window.addEventListener('resize', actualizarAnchoPantalla);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', actualizarAnchoPantalla);
    };
  }, []); 
    
    return (
        <Box sx={feacturesSectionStyle.mainContainer}>

            <Box sx={feacturesSectionStyle.textHeader}>
                <Typography variant='h2' sx={feacturesSectionStyle.title}>
                  Download the extension
                </Typography>
                <Typography variant='subtitle1' sx={feacturesSectionStyle.subTitle}>
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                    got a favourite you’d like us to prioritize.
                </Typography>
            </Box>

          <Box sx={feacturesSectionStyle.feactureContainer}>
              {
                extensionData.map((extension, index) => {
                  return (
                    <CardExtension dataCard={extension} endPositionEffect={anchoPantalla > 1000 ? separateY*(1-index) : 0}  key={index}/>
                  )
                })
              }
          </Box>
        </Box>
      )
}

export default DownloadExtensionSection