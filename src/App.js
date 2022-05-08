import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Blog from './components/Home/Blog/Blog';
import Home from './components/Home/Home/Home';
import Navigation from './components/Shared/Navigation/Navigation';
import NotFound from './components/Shared/NotFound/NotFound';
import Login from './components/Shared/Login/Login';
import Register from './components/Shared/Register/Register';
import ManageInventory from './components/Home/ManageInventory/ManageInventory';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import AddInventory from './components/Home/AddInventory/AddInventory';
import ProductDetail from './components/Home/ProductDetail/ProductDetail';
import MyItems from './components/Home/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/myItems" element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>} />
        <Route path="/manageInventory" element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>} />
        <Route path="/inventory/:inventoryId" element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        } />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/addInventory"
          element={
            <RequireAuth>
              <AddInventory></AddInventory>
            </RequireAuth>
          } />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover></ToastContainer>
    </div>
  );
}

export default App;
