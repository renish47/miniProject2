import React,{useState,useEffect,useContext} from 'react'
import { Link} from 'react-router-dom'
import logo from './logo.png';
import SideCard from '../Items/SideCard';
import {cartCountSetter,cartSetter} from '../../App'


function Navigation() {
    let [btnClicked, setBtnClicked]=useState(0)
    let context = useContext(cartCountSetter)
    let context2 = useContext(cartSetter)
    useEffect(()=>{
            context.setCount(context2.cart.length)
    },[])
    return <>
        <SideCard data={btnClicked}/>
        <nav className="shadow navbar navbar-expand-lg navbar-dark navStyle">
            <div className="container px-4 px-lg-5">
                <Link to='/home'>
                    <div className="navbar-brand">
                        <img src={logo} alt={"Pizza-Pizza"} className='logo' /> </div>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <Link to='/home'>
                            <li className="nav-item"><div className="nav-link active" aria-current="page">Home&emsp;</div></li>
                        </Link>
                        {/* <li className="nav-item"><a className="nav-link" href="javascript(void)">About</a></li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="javascript(void)" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/menu/all-products'>
                                    <li><div className="dropdown-item" >All Products</div></li>
                                </Link>
                                <li><hr className="dropdown-divider" /></li>
                                <Link to='/menu/pizza'>
                                    <li><div className="dropdown-item">Pizza</div></li>
                                </Link>
                                <Link to='/menu/dessert'>
                                    <li><div className="dropdown-item">Dessert</div></li>
                                </Link>
                                <Link to='/menu/drinks'>
                                    <li><div className="dropdown-item">Drinks</div></li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        {/* <div className=" orderBtn text-white" type="button"data-bs-toggle="modal" data-bs-target="#staticBackdrop"> */}
                        <div className=" orderBtn text-white" onClick={()=>{
                            setBtnClicked(btnClicked+1)
                        }}>
                            {/* <i className="bi-cart-fill me-1"></i> */}
                            Cart
                            <span className="badge bg-light text-black ms-1 rounded-pill">{context.count}</span>
                        </div>

                    </form>
                </div>
            </div>
        </nav>
    </>
}

export default Navigation