import React, { useContext } from 'react'
import { cartCountSetter, cartSetter } from '../../App'


function SideCard(props) {
  let total = 0;
  let context = useContext(cartCountSetter)
  let context2 = useContext(cartSetter)

  return <>
    <div id='cart' className='py-3 ps-4 overflow-auto'>
      <span className='closeCart' >
        <i className="fa-solid fa-xmark" id='closeCart'></i></span>
      <div className="">
        <h4 className='text-center'>Your Orders</h4>
        <p style={context2.cart.length==0?{display:'block'}:{display:'none'} }className="emptySign">Cart is Empty</p>
        {
          context2.cart.map((e) => {
            total += (e.selectedVarientPrice * e.quantityRequired)
            return <div key={e.id + e.name+e.selectedVarientPrice} id={e.id + e.name+e.selectedVarientPrice} className="cartList">
              <div>
                <img src={e.img} className="cartProductImg" />
              </div>
              <div className="cartProductDetail">
                <p className='p-0 m-0'>{e.quantityRequired} x {e.name}&nbsp;<span className="text-secondary">{e.type === "Pizza" ? "(" + e.selectedVarient + ")" : ''}</span></p>
                <p className='pt-0 mt-0 text-success fw-bold rateText'>&#x20b9; {(e.selectedVarientPrice * e.quantityRequired)}</p>
              </div>
              <div className="">
                <i className="fa-solid fa-square-minus cartProductRemove" id={"#" + e.id + "#" + e.name+e.selectedVarientPrice} onClick={(e) => {
                  document.getElementById(e.target.id.slice(1).replace("#", "")).innerHTML = ''
                  document.getElementById(e.target.id.slice(1).replace("#", "")).style.border = '0'
                  document.getElementById(e.target.id.slice(1).replace("#", "")).style.padding = '0'
                  // let item =context2.cart.find( product=>product.id +"#"+ product.name ===e.target.id)
                  let temp = context2.cart.filter(product => "#" +product.id + "#" + product.name+ product.selectedVarientPrice !== e.target.id)
                  console.log(temp)
                  context2.setCart(temp)
                  context.setCount(temp.length)

                  if(temp.length==0){
                    document.getElementById('billFlex').style.opacity="0"
                  }

                }}></i>
              </div>
            </div>
          })
        }
      </div>
    </div>
    <div id="bill">
      <div className='billFlex ' style={context2.cart.length!=0?{opacity:"100%"}:{opacity:"0"}} id='billFlex'>
        <div className="w-50 ps-5 pt-4 ">
          <h5>Sub Total</h5>
          <p className="mb-0 text-secondary">Tax</p>
          <p className="mb-0 text-secondary">Delivery</p>
        </div>
        <div className="w-50 ps-5 pt-4">
          <h5>&#x20b9; {total.toFixed(2)}</h5>
          <p className="mb-0 text-secondary">&#x20b9; {(0.097 * total).toFixed(2)}</p>
          <p className="mb-0 text-secondary">&#x20b9; {(70).toFixed(2)}</p>
        </div>
      </div>
      <div style={{textAlign:'center'}}>
        <button className={total==0?'payBtn btn btn-success disabled':'payBtn btn btn-success'} id='payBtn'>{total==0?"Checkout":<span>Checkout &emsp;&emsp;&emsp; &#x20b9; {(total+70+(total*0.097)).toFixed(2)}</span>}</button>
      </div>
    </div>
  </>
}

export default SideCard