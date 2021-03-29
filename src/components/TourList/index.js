import React, { useState } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from './tourData';

function TourList() {
    //state={
        //tours: tourData
    //}

    //state
    const [tours, setTours] = useState(tourData);

    //remove tours function
    const removeTour = (id) =>{
        const sortedTours = tours.filter(tour => tour.id !== id);
        setTours(sortedTours);

    }
    //render {
        //const {tours} = this.state;
        return (
            <section className="tourlist">
                {tours.map(tour =>{
                    return <Tour key={tour.id} tour={tour} remove={removeTour}/>
                })}
            </section>
        );
    //}
}

export default TourList;