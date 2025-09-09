import './App.css';
import Navbar from './component/Navbar/navbar';
import HomeScreen from './screen/homeScreen/homeScreen'; 
import { Routes,Route} from 'react-router-dom';
import Products from './screen/Products/Product';
import Footer from './component/Navbar/Footer/Footer';
import Cart from './screen/Cart/Cart';
import Login from './screen/Login/Login';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/product' element={<Products />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
