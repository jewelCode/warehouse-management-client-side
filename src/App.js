import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Blog from './components/Home/Blog/Blog';
import Home from './components/Home/Home/Home';
import Navigation from './components/Shared/Navigation/Navigation';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/Shared/NotFound/NotFound';
import Login from './components/Shared/Login/Login';
import Register from './components/Shared/Register/Register';
import Inventory from './components/Home/Invetory/Inventory';
import ManageInventory from './components/Home/ManageInventory/ManageInventory';
import InventoryDetails from './components/Home/InventoryDetails/InventoryDetails';





function App() {
  return (
    <div>
       <Navigation></Navigation>
  
          <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/about" element={<About></About>} />
              <Route path="/blog" element={<Blog></Blog>} />
              <Route path="/inventory/:inventoryId" element={<InventoryDetails></InventoryDetails>} />
              <Route path="/login" element={<Login></Login>} />
              <Route path="/register" element={<Register></Register>} />
              <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
