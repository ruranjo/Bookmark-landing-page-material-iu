import React from 'react'
import { faqs } from '../../utils/data';
import { Accordion } from '../Accordion';
import { Box, Button, SxProps, Typography } from '@mui/material';
import { grayishBlue, rubikFontFamily, veryDarkBlue } from '../../styles/variables';

export interface styledFrequentAskedQuestions {
    mainContainer: SxProps;
    sectionContainer: SxProps;
    title: SxProps;
    subTitle: SxProps;
    textHeader: SxProps;
    buttonContainer: SxProps;
    button: SxProps;
}
  
  const frequentAskedQuestionsStyle: styledFrequentAskedQuestions = {
    mainContainer:{
      //border:'1px solid red',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      width:'100%',
      margin:0,
      height:'auto',
      paddingTop:'2rem',
      gap:2,
      '@media screen and (max-width: 440px)': {
        height:'auto',
      },
    },
    sectionContainer:{
        //border:'1px solid green', 
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        width:'50%',
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
      },
    },
    textHeader:{
        display:'flex',
        flexDirection:'column',
        gap:5
    },
    buttonContainer:{
      margin:'3rem',
      display:'flex',
      gap:2,
    },
  
    button:{
      textTransform: 'none',
      fontWeight:'700',
    },
    
  }


const FrequentAskedQuestions:React.FC<{}> = () => {
    return (
        <Box sx={frequentAskedQuestionsStyle.mainContainer}>
          <Box sx={frequentAskedQuestionsStyle.textHeader}>
                <Typography variant='h2' sx={frequentAskedQuestionsStyle.title}>
                  Frequently Asked Questions
                </Typography>
                <Typography variant='subtitle1' sx={frequentAskedQuestionsStyle.subTitle}>
                  Here are some of our FAQs. If you have any other questions you’d like 
                  answered please feel free to email us.
                </Typography>
            </Box>
          <Box sx={frequentAskedQuestionsStyle.sectionContainer}>
            
              {faqs.map((d, i) => (
                <Accordion accordion={d} key={i}/>
              ))}
            
          </Box>
          <Box sx={frequentAskedQuestionsStyle.buttonContainer}>
            <Button sx={frequentAskedQuestionsStyle.button}  color='primary' variant='contained' >More info</Button>
          </Box>
        </Box>
    );
}

export default FrequentAskedQuestions

