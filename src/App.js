// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { SharedLayout } from './components/SharedLayout';
import About from './pages/About';
import Delivery from './pages/Delivery';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path="*" element={<p className='text-red-500'>Page not found</p>} />
      </Route>
    </Routes>
  )

};


export default App;
