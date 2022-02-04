import React from 'react';
import Link from 'react-router-dom';

import { AppBar, Toolbar, useScrollTrigger, Typography, Tab, styled } from "@mui/material";

import './header.styles.css'

function ElevationScroll(props) {
  const { children } = props;
  //elevates header when scrolling
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "auto",
  color: "black"
}));

const Header = () => {
  return (
    <>
    <ElevationScroll>
    <AppBar position='center' >
      <Toolbar disabledGutters={true}>
        <Typography variant="h3" color="secondary" >
        Space Time Metaverse
          </Typography>
          </Toolbar>
    </AppBar>
    </ElevationScroll>
    </>
  );
}
export default Header
