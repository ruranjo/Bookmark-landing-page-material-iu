
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, SxProps } from '@mui/material'
import React from 'react'
import { iconHamburger, logoBookmark } from '../../utils/assets';
import { rubikFontFamily } from '../../styles/variables';


export interface styledApp {
  navbarBox: SxProps;
  logo: SxProps;
  buttonContainer: SxProps;
  button: SxProps;
  hamburger: SxProps;
}

const navbarStyle: styledApp = {
  navbarBox:{
    //border:'1px solid red',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    height: '15%',
    minHeight:'100px',
    width:'80%',
    marginBottom:'1rem',
    '@media screen and (max-width: 440px)': {
      height:'auto',
      width:'100%',
    },
  },

  logo:{
    '@media screen and (max-width: 440px)': {
    },
  },

  buttonContainer:{
    //border:'1px solid red',
    display:'flex',
    justifyContent:'space-between',
    width:'40%',
    gap:'1rem',
    '@media screen and (max-width: 880px)': {
      display:'none',
    },
  },

  button:{
    fontFamily: rubikFontFamily + ' !important',
  },

  hamburger:{
    display:'none',
    '@media screen and (max-width: 880px)': {
      display:'inline-block',
    },
  },
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';


const Navbar:React.FC<{}> = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['FEATURES', 'PRICING', 'CONTACT'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['LOGIN'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box  sx={navbarStyle.navbarBox}>
      <Box sx={navbarStyle.logo}>
        <img src={logoBookmark} alt="logoBookmark" />
      </Box>
      
      <Box sx={navbarStyle.buttonContainer}>
        <Button sx={navbarStyle.button}  color='info' variant='text' >FEATURES</Button>
        <Button sx={navbarStyle.button}  color='info' variant='text' >PRICING</Button>
        <Button sx={navbarStyle.button}  color='info' variant='text' >CONTACT</Button>
        <Button sx={navbarStyle.button}  color='secondary' variant='contained' >LOGIN</Button>
      </Box>

      <Box sx={navbarStyle.hamburger}>
        <IconButton onClick={toggleDrawer('right', true)}>
          <img src={iconHamburger} alt="iconHamburger" />
        </IconButton>
        <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
        </Drawer>
      </Box>

    </Box>
  )
}

export default Navbar;

