import React from 'react';
import './style.css'; // Import your CSS file

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
        <img src={car.image} alt={car.name} className="car-image" />
        <div className="car-details">
          <h2 className="car-name">{car.name}</h2>
          <p className="car-year">{car.year}</p>
        </div>
        <div>
            <div className='description'>
                <p>{car.description}</p>
            </div>
            <div className='description'>
                <div>
                    <p><i class="ri-speed-up-fill"></i>{car.consumption}</p>
                </div>
                <div>
                    <p><i class="ri-steering-2-line"></i>{car.type}</p>
                </div>
            </div>
        </div>
        <div className='line'></div>

        <div className='ground'>
            <div className='prise'>
                <h1 className="car-price">${car.price}</h1>
                <p>/month</p>
            </div>
            <div>
                <button className='heart'><i class="ri-heart-line"></i></button>
            </div>
        </div>
        <div>
            <button className='rent-button'>Rent now</button>
        </div>
    </div>
  );
};

export default CarCard;
