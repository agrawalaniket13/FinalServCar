import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUser from './components/ViewUser';
import AdminDashboard from './components/AdminDashboard';
import Base from './components/Base';
import AddUser from './components/AddUser';
import ViewMechanic from './components/ViewMechanic';
import AddMechanic from './components/AddMechanic';
import UpdateMechanic from './components/UpdateMechanic';
import ViewVehicle from './components/ViewVehicle';
import AddVehicle from './components/AddVehicle';
import UpdateVehicle from './components/UpdateVehicle';
import ViewService from './components/ViewService';
import AddService from './components/AddService';
import UpdateService from './components/UpdateService';
import UpdateUser from './components/UpdateUser';
import ViewServiceOffered from './components/ViewServiceOffered';
import ViewUserService from './components/ViewUserService';
import AddServiceOffered from './components/AddServiceOffered';
import UpdateServiceOffered from './components/UpdateServiceOffered';
import Home from './components/Home';
import ViewEnquiry from './components/ViewEnquiry';
import AddEnquiry from './components/AddEnquiry';
import UpdateEnquiry from './components/UpdateEnquiry';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Header from './components/Header';
import UserDashboard from './components/UserDashboard';
import UserServiceDashboard from './components/UserServiceDashboard';
import UserEnquiryDashboard from './components/UserEnquiryDashboard';
import UserRaiseEnquiry from './components/UserRaiseEnquiry';

function App() {
  return (
    
      <BrowserRouter>
      <Base>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='adminDashboard' element={<AdminDashboard />}></Route>
          <Route path='/viewUser' element={<ViewUser />}></Route>
          <Route path='addUser' element={<AddUser />}></Route>
          <Route path='updateUser' element={<UpdateUser />}></Route>
          <Route path='viewMechanic' element={<ViewMechanic />}></Route>
          <Route path='addMechanic' element={<AddMechanic />}></Route>
          <Route path='updMechanic' element={<UpdateMechanic />}></Route>
          <Route path='viewVehicle' element={<ViewVehicle />}></Route>
          <Route path='addVehicle' element={<AddVehicle />}></Route>
          <Route path='updVehicle' element={<UpdateVehicle />}></Route>
          <Route path='viewService' element={<ViewService />}></Route>
          <Route path='addService' element={<AddService />}></Route>
          <Route path='updService' element={<UpdateService />}></Route>
          <Route path='viewOfferService' element={<ViewServiceOffered />}></Route>
          <Route path='viewUserService' element={<ViewUserService />}></Route>
          <Route path='addOfferService' element={<AddServiceOffered />}></Route>
          <Route path='updOfferService' element={<UpdateServiceOffered />}></Route>
          <Route path='viewEnquiry' element={<ViewEnquiry />}></Route>
          <Route path='addEnquiry' element={<AddEnquiry />}></Route>
          <Route path='updEnquiry' element={<UpdateEnquiry />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='user' element={<User />}></Route>
          <Route path='userDashboard' element={<UserDashboard />}></Route>
          <Route path='userServiceDashboard' element={<UserServiceDashboard />}></Route>
          <Route path='userEnquiryDashboard' element={<UserEnquiryDashboard />}></Route>
          <Route path='userRaiseEnquiry' element={<UserRaiseEnquiry />}></Route>
        </Routes>
        </Base>
      </BrowserRouter>
    
    // <div className="App">
    //   <Employee />
    // </div>
  );
}

export default App;
