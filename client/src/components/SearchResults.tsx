import React, { useContext } from 'react'
import {Grid } from "@material-ui/core";




interface props{
    results:any
}



const SearchResults: React.FC<props>=(props)=>{
    

    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h2>hiii</h2>
                </Grid>
                <Grid item xs={6}>
                    <h2>dumbass</h2>
                </Grid>
            </Grid>

        </>
        
    )

}
export default SearchResults;