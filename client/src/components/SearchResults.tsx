import React, { useContext } from 'react'
import {Grid } from "@material-ui/core";
import Layout from './shared/Layout';
import Map from '../components/map';







const SearchResults: React.FC=()=>{
    let center:any;
    let zoom:any;

    return(
        
       <Layout>
        

            <div style={{marginTop:"8.0rem"}}>
           
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                    <h1>dumbass</h1>
                    </Grid>
                    <Grid item xs={8}>
                        <Map center={center} zoom={zoom}/>
                    </Grid>
                </Grid>
           </div>
       </Layout>
   
        
        
    )

}
export default SearchResults;