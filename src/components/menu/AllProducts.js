import React, { useState, useEffect } from 'react'
import MainSection from '../PageComponents/MainSection'
import Navigation from '../PageComponents/Navigation'
import axios from 'axios'



function AllProducts() {
  let getData = async () => {
    try {
      let pizza = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/PizzaData');
      if (pizza.status === 200) {
        let Drinks = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/DrinksData');
        if (Drinks.status === 200) {
          let Dessert = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/DessertData');
          if (Dessert.status === 200) {
            setData([...pizza.data, ...Drinks.data, ...Dessert.data])
          }
        }
      }
    }
    catch { console.log('err') }
  }

  let [data, setData] = useState([])


  document.addEventListener("click",function(event) {
    console.log(event.target.id)
      if(event.target.id=='closeCart'){
        document.getElementById('cart').style.right="-500px"
        document.getElementById('bill').style.right="-500px"
      }
      else if (event.target.closest("#cart") || event.target.closest(".orderBtn") || event.target.closest("#bill") || event.target.id.slice(0,1)=="#" ) {
        document.getElementById('cart').style.right='0'
        document.getElementById('bill').style.right='0'
      }
      else{
        document.getElementById('cart').style.right="-500px"       
        document.getElementById('bill').style.right="-500px"       
      }
    })
  useEffect(() => {
    window.scroll(0,0)
    getData()
  }, [])

  return <>
    <Navigation />
    <MainSection data={data} title={'All Products'}/>
  </>
}

export default AllProducts