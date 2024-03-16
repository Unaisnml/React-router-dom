import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Details from './components/Details';
import UnaisPage from './components/UnaisPage';
import Order from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

function App() {
  return (
    <>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='details' element={<Details/>}/>
    <Route path='click' element={<UnaisPage/>}/>
    <Route path='order-summary' element={<Order/>}/>
    <Route path='products' element={<Products/>}>
      {/* index Route */}
      <Route index='featured' element={<FeaturedProduct/>}/>
      {/* ^^^ */}
      <Route path='featured' element={<FeaturedProduct/>}/>
      <Route path='new-products' element={<NewProducts/>}/>
    </Route>
    <Route path='users' element={<Users/>}>
    <Route path=':userId' element={<UserDetails/>}/>
   <Route path='admin' element={<Admin/>}/>
</Route>
    <Route path='*' element={<NoMatch/>}/>
  </Routes>
    </>

  );
}

export default App;
