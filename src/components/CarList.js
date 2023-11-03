import React from 'react';
import CarCard from './CarCard'; // Import the CarCard component
import './style.css'; // Import your CSS file

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {/* The map() function in React JS empowers you to efficiently render dynamic content based on arrays. */}
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
