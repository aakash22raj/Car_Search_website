import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //routing the applcation
import CarList from './components/CarList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import carsData from '../src/data/caras.json';




function App() {
  const [cars, setCars] = useState(carsData);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // calculation of range of car card display on page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = (indexOfLastCar - carsPerPage);
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // To filter the car data based on search bar
  const handleSearch = (searchTerm) => {
    const filteredCars = carsData.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCars(filteredCars);
    setCurrentPage(1);
  };

  return (
    <Router>
      <div className="app">
        <h1 className='main'>Car Search Website</h1>
            <SearchBar onSearch={handleSearch} />  {/* Search the car by name */}
            <CarList cars={currentCars} />   {/* display the list of cars, with a limited number of cars per page */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
        <Routes>
          <Route exact path="/" >
          </Route>
          <Route path="/page/:page">
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;

