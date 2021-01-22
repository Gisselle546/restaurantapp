import React, { useEffect, useRef, useState } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import {useNavbarStyles} from '../../styles';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import {MapContext} from '../../context/geoCords';
  
  interface Props{
   
    history:any
 }
 
 

const NavBar: React.FC<Props & RouteComponentProps>=(props)=>{
   
const [navBackground, setNavBackground] = useState(false)
    
const navRef = useRef(false)
const classes = useNavbarStyles();


navRef.current = navBackground


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
      <AppBar position="fixed" style={{ boxShadow: 'none',transition: '1s ease', backgroundColor: navBackground ? 'rgba(22, 34, 45)' : 'transparent'}}>
        <Toolbar className={classes.appBar}>
         <Logo/>
            <div className={classes.inputContainer}>
            <Search history={props.history} />
            </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}



function Logo() {
    const classes = useNavbarStyles();
  
    return (
      <div className={classes.logoContainer}>
       
          <div className={classes.logoWrapper}>
          <Link to="/">
            <img src={logo} alt="Instagram" className={classes.logo} />
            </Link>
          </div>
          
      </div>
    );
  }


  const Search: React.FC<Props >= ({history}) => {

      const classes = useNavbarStyles();
      const [query, setQuery] = React.useState("");
      const [center, setCenter] = React.useState({lat:42.3265,lng:-122.8756});
      const {geocords,setGeocords}= React.useContext(MapContext);
     
       
      useEffect(() => {
        setGeocords(center)
       
      }, [center])


   


      function handleClearInput(){
          setQuery("")
      }

     const handleChange = (address:any) => {
        setQuery(address);
      };

     
    
      async function handleSelect(address:any ){
        handleClearInput()
        await geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then((latLng) => {
              setCenter(latLng);
            
            })
          .catch(error => console.error('Error', error));
          
            await history.push('/search')
        };
        
    return(
        <div style={{width:"70%",position:"absolute"}}>
        <PlacesAutocomplete
        value={query}
        onChange={handleChange}
        onSelect={handleSelect}
       
      >
           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
               
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: classes.input
              })}
            />
            <div className="autocomplete-dropdown-container">
              
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer', color:'#000'}
                  : { backgroundColor: '#ffffff', cursor: 'pointer', color:'#000' };
                return (
                
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      
   </PlacesAutocomplete> 
   </div>

    )



  }


export default withRouter(NavBar);