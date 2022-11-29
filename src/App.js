import './App.css';
import React,{useState} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './components/Pages/Home';
import AllProducts from './components/menu/AllProducts';
import Pizza from './components/menu/Pizza';
import Dessert from './components/menu/Dessert';
import Drinks from './components/menu/Drinks';
import LoadingPage from './components/Pages/LoadingPage';
import OrdersPage from './components/Pages/OrdersPage';
// import MenuPage from './components/Pages/MenuPage';
// import axios from 'axios'
export const cartCountSetter = React.createContext()
export const cartSetter = React.createContext()



function App() {



  let [count,setCount]=useState(0)
  let [cart,setCart]=useState([])

  return <>
  <cartCountSetter.Provider value={{count,setCount}}>
  <cartSetter.Provider value={{cart,setCart}}>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/menu/all-products' element={<AllProducts/>}/>
    <Route path='/menu/pizza' element={<Pizza/>}/>
    <Route path='/menu/dessert' element={<Dessert/>}/>
    <Route path='/menu/drinks' element={<Drinks/>}/>
    <Route path='/loading' element={<LoadingPage/>}/>
    {/* <Route path='/menu/:id' element={<MenuPage/>}/> */}
    <Route path='/order' element={<OrdersPage/>}/>
    <Route path='*' element={<Navigate to={'/home'}/>}/>
  </Routes>
  </cartSetter.Provider>
  </cartCountSetter.Provider>
  </>
}




export default App;
