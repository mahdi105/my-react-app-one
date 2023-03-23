import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, area, population, capital, flags} = props.country;
    return (
        <div className='country'>
            <div id='flag'>
               <img src={flags.png} alt="" /> 
            </div>
            <h1>{name.official}</h1>
            <p>City: {capital?capital[0]:'No Capital'}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Area: {props.country.population}Km<sup>2</sup></p>
        </div>
    );
};

export default Country;