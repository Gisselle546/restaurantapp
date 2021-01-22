import GoogleMapReact from 'google-map-react';
import {useMapStyles} from '../styles';

interface props{
    center:any,
    zoom:9
}



const Map: React.FC<props>=({center,zoom})=>{
    const classes= useMapStyles();

    return(
        <div className={classes.map}>
            <GoogleMapReact
                bootstrapURLKeys={{key:process.env.REACT_APP_GoogleApi!}}
                defaultCenter={center}
                defaultZoom={zoom}
            >

            </GoogleMapReact>
        </div>
    )

}

Map.defaultProps={
    center:{
        lat:JSON.parse(localStorage.getItem("location")!).lat,
        lng:JSON.parse(localStorage.getItem("location")!).lng
    },
    zoom:9
}

export default Map;