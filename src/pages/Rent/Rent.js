import React from "react";
import MapImage from "../../components/MapImage";
import { Link } from 'react-router-dom';

const Rent = () => (
    <React.Fragment>
        <Link to={'/'} id="rent-btn">HOME</Link>
        <MapImage/>
    </React.Fragment>
)

export default Rent;