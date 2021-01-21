import React from 'react';
import Layout from '../components/shared/Layout';
import {Typography, Button } from "@material-ui/core";
import {homepageStyles} from '../styles';

const Homepage: React.FC=()=>{
    const classes = homepageStyles()

    return(
        <>
        
        <Layout>
        <div className={classes.root}>
            <div className={classes.headingContainer}>
                <Typography variant="h2" className={classes.heading}>
                    Get Hungry
                </Typography>
                <Button className={classes.headingButton}variant="contained">Click Here</Button>
            </div>

          </div>
          <h1 style={{height:"4000px"}}>hiiii</h1>
          
        </Layout>

       

        </>
        
    )

}
export default Homepage;