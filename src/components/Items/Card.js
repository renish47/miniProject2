import axios from 'axios';
import React, { useState,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {cartCountSetter,cartSetter} from '../../App'
let varient = 'medium pan';
// let quantityReqd} = 1;

function Card({ data }) {
  let [quantity,setQuantity]=useState(1)
  let context = useContext(cartCountSetter)
  let context2 = useContext(cartSetter)
  
  let flag = false;
  
  async function addToCart(event){
    try {
      let id = event.target.id
        let type = id.slice(id.indexOf('-')+1)
        let apiId = id.slice(id.indexOf('*')+1,id.indexOf('-'))
        let product = await axios.get(`https://6383737b6e6c83b7a993f4e3.mockapi.io/${type}Data/${apiId}`);
        if (product.status === 200) {
          product.data.selectedVarient = varient;
          product.data.quantityRequired = quantity;
          // product.data.quantityRequired = quantityReqd;
          product.data.selectedVarientPrice = id.slice(0,id.indexOf('*'))
          if(context2.cart.length>0){
            for(let data of context2.cart){
              if(product.data.name.toLowerCase().replace(" ","") === data.name.toLowerCase().replace(" ","") && varient === data.selectedVarient){
                data.quantityRequired += quantity;
                flag=true;
                break;
              }
            }
          }
          if(flag==false){
            context2.cart.push(product.data)
          }
          context.setCount(context2.cart.length)
          varient='medium pan'
          flag=false;
          // quantityReqd=1
          // setQuantity(1)
          console.log(context2.cart)
        }
      }catch{
        console.log('problem is addToCart function')
      }
  }

  let[price,setPrice]=useState(data.price)
  return <>
    <div className="col mb-5 ">
      <div className="card h-100 soloCard">
        {/* <div className="badge bg-success text-white position-absolute" style={data.veg?{top: "0.5rem",right: "0.5rem"}:{display:'none'}}>veg</div> */}
        <img className="card-img-top" src={data.img} alt="..." />
        <div className="card-body pb-0">
          <div className="text-center">
            <h5 className="fw-bold cardTitle">{data.name}<i className={data.veg ? "fa-solid ms-1 fa-circle vMark" : "fa-solid fa-circle ms-1 nvMark"}></i> </h5>
            <span className="text-muted ">{data.description}</span><br /><br />
            {/* <span className="text-muted text-decoration-line-through"></span> */}
          </div>
        </div>


        <div className='text-center px-3'>
          {/* <span>Quantity&emsp;</span> */}
          
            <div className='h5 text-success pb-2'>&#x20b9; {(price * 50).toFixed(2)}</div>
            <Form.Select aria-label="Default select example" id='varientSelector' className={data.type==='Pizza'?
            'selectField':'hide'}
              onChange={(e)=>{
                varient = e.target.value
                let varientPrice = data.sizeandcrust[varient].price
                setPrice(varientPrice)
                setQuantity(1)
              }}>
              <option value="medium pan">Medium Pan</option>
              <option value="medium stuffed crust cheese-max">Medium stuffed cheesemax</option>
              {data.veg?<option value="medium stuffed crust veg-kebab">medium stuffed veg-kebab</option>:<option value="medium stuffed crust kebab">medium stuffed kebab</option>}
            </Form.Select>
          <div className="card-footer px-0 border-top-0 bg-transparent cardFooter justify-content-center">
            {/* <Form.Control type="number" min="1" className='quantityField' defaultValue='1' onChange={(e)=>{
                quantityReqd = e.target.value}}/> */}
            <Button className="btn btn-dark minusBtn" onClick={()=>{if(quantity>1)setQuantity(e=>e-1)}}>-</Button>
          <span className='qty'>{quantity}</span>
           <Button className="btn btn-dark plusBtn" onClick={()=>{setQuantity(e=>e+1)}}>+</Button>
            <div className="text-center"><div className="btn btn-warning mt-auto ms-3 addToCartBtn"  id={(price* 50)+"*"+data.id+"-"+data.type} onClick={(e)=>{
              addToCart(e)}}>Add to Cart</div></div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Card
