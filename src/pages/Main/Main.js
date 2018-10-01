import React from "react";
import Welcome from "../../components/Welcome";
import { Link } from 'react-router-dom';

const Main = () => (
    <React.Fragment>
        <Welcome/>
        <Link to={'/rent'} id="rent-btn">RENT</Link>
        <label htmlFor="rent-btn">I would like to ride a bike</label>
        <Link to={'/lend'} id="lend-btn">LEND</Link>
        <label htmlFor="lend-btn">I would like to share a bike</label>
    </React.Fragment>
)

export default Main;