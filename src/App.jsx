// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Login from './components/LoginPage/Login.jsx'
import Signup from "./components/SingUpPage/Signup.jsx";
import SideNave from './components/sidebar/SideNave.jsx'
import Table from './components/Table/Table.jsx'
import Create from './components/Table/Create.jsx'
import {TransitionsModal} from './components/Table/EditButton.jsx'
import  Home from './components/Home.jsx'
import Loder from './components/spn/Loder.jsx'



function App() {
  return (
    <>
    
      <BrowserRouter>
  <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/home" element={<Home/>}/>
   
   {/* <Route path="/nav" element={<SideNave/>}/> */}
   {/* <Route path="/table" element={<Table/>}/> */}
   {/* <Route path="/Create" element={<Create/>}/> */}
   {/* <Route path="/loder" element={<Loder/>}/> */}
   {/* <Route path="/update" element={<TransitionsModal/>}/> */}
  </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
