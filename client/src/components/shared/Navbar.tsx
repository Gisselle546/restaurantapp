import React, { useEffect, useRef, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";



function NavBar(){
    
const [navBackground, setNavBackground] = useState(false)
    
const navRef = useRef(false)

navRef.current = navBackground

console.log(navRef.current)


useEffect(() => {
  const handleScroll = () => {
    const show = window.scrollY > 4
    if (navRef.current !== show) {
      setNavBackground(show)
    }
  }
  document.addEventListener('scroll', handleScroll)
  return () => {
    document.removeEventListener('scroll', handleScroll)
  } 
}, [])
    

    
    return(
        <AppBar position="static" style={{ boxShadow: 'none',transition: '1s ease', backgroundColor: navBackground ? 'rgba(22, 34, 45)' : 'transparent'}}>
        <Toolbar>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar;