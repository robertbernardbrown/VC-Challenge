import React from "react";

const BikeList = (props) => (
    <div id="bike-list">
        <table>
            <tbody>
                <tr>
                    <th className="bike-list-cell">ID</th>
                    <th className="bike-list-cell">Origin</th>
                    <th className="bike-list-cell">Start Time</th>
                    <th className="bike-list-cell">End Time</th>
                    <th className="bike-list-cell">Action</th>
                </tr>
                {props.bikes.map((cur, i) => 
                cur ? <tr key={i}>
                    <td className="bike-list-cell">{cur.ID}</td>
                    <td className="bike-list-cell">{cur.origin}</td>
                    <td className="bike-list-cell">{cur.startTime}</td>
                    <td className="bike-list-cell">{cur.endTime}</td>
                    <td className="bike-list-cell"><button className="rent-btn">Rent</button></td>
                </tr> : <tr>Sorry, there are no bikes nearby!</tr>
                )}
            </tbody>
        </table>
    </div>
)

export default BikeList;