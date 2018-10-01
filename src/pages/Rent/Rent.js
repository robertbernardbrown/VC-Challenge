import React from "react";
import MapImage from "../../components/MapImage";
import BikeList from "../../components/BikeList";
import { Link } from 'react-router-dom';

const Rent = (props) => (
    <React.Fragment>
        <Link to={'/'} id="rent-btn">CITI-Bike</Link>
        <MapImage/>
        <BikeList bikes={props.bikes}/>
    </React.Fragment>
)

export default Rent;