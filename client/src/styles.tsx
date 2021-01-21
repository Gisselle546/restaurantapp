import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const homepageStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    height:"88vh",
    background:"linear-gradient(to right bottom,rgba(128,128,128, 0),rgba(255,227,227, 0.44)),url(https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80) center/cover",
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-start",
    marginTop:"-6rem"
        
  },
  heading:{
      
      color:"#fff",
      fontWeight:"bold",
      fontFamily: 'Yusei Magic'
  },

  headingContainer:{
      marginLeft:"45px"
  },

  headingButton:{
      backgroundColor:"#fff",
      borderRadius:"30px",
      marginTop:"24px"
      
  },


  


}),
);

export const useNavbarStyles = makeStyles(theme => ({
    
        logoContainer: {
            display: "flex",
            minWidth: 50,
       
        },
   

      logoWrapper:{
        
        height:128,
        
      },

      logo: {
        
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain",
        
       
      }
     


}));