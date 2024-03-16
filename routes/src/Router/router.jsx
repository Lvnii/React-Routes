import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/home';
import About from '../Pages/about';
import Person from '../Pages/person';
import Persons from '../Pages/persons';

const Router = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<div>NEWS</div>} />
          <Route path='/persons' element={<Persons />} />
          <Route path='/person/:id' element={<Person />} />
          <Route path='/*' element={<h1>Page Not Found</h1>} />
        </Routes>
    );
}

export default Router;