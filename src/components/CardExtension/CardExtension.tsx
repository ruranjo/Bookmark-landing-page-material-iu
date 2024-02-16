import { Box, Button, Card, SxProps, Typography } from '@mui/material'
import React from 'react'
import { grayishBlue, rubikFontFamily,  veryDarkBlue, white } from '../../styles/variables';
import { motion } from "framer-motion";
import { Extension } from '../../intefaces/feacture.interface';



export interface Props {
    dataCard: Extension;
    endPositionEffect: number;
}

export interface styledCardExtension {
    cardStyle: SxProps;
    title: SxProps;
    subTitle: SxProps;
    textHeader: SxProps;
    button: SxProps;
  }
  
  const cardExtensionStyle: styledCardExtension = {
    cardStyle:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        borderRadius:'10px',
        maxWidth: '345px',
        minHeight: '200px',
        padding:'1rem',
        backgroundColor: white,
        color: veryDarkBlue,
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Ajusta los valores según tus preferencias
        '@media screen and (max-width: 420px)': {
        },
      },
      title:{
        //border:'1px solid black',
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        fontSize:'1rem',
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
        marginTop:'1rem',
        marginBottom:'3rem'
      },
      button:{
        textTransform: 'none',
        fontWeight:'700',
      },
    }


const CardExtension:React.FC<Props> = ({dataCard, endPositionEffect}) => {
  return (
    <motion.div 
      initial={{ y: 200, opacity:0 }}
      animate={{ y: endPositionEffect, opacity:1 }}
      transition={{ duration: 2 }}
      style={{margin:'0.2rem'}}
    >

    
    <Card sx={cardExtensionStyle.cardStyle}>
        <Box>
          <img  src={dataCard.img} alt={dataCard.extensionName} />
        </Box>
            
        <Box sx={cardExtensionStyle.textHeader}>
          
          <Typography variant='h6' sx={cardExtensionStyle.title}>
            Add to {dataCard.extensionName}
          </Typography>
          <Typography variant='subtitle1' sx={cardExtensionStyle.subTitle}>
            Minimun version {dataCard.minimumVersion}
          </Typography>
        
        </Box>
        <Button sx={cardExtensionStyle.button} color='primary' variant='contained' >Add & install Extension</Button>
    </Card>
    </motion.div>
  )
}

export default CardExtension