import React,{useState,useEffect} from 'react'
import MainSection from '../PageComponents/MainSection'
import Navigation from '../PageComponents/Navigation'
import axios from 'axios'


let getData = async(setData)=>{
  try{
    let pizzaData = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/PizzaData');
    if(pizzaData.status===200)
    setData(pizzaData.data)
  }
  catch{console.log('err')}
}

function Pizza() {
  let [data,setData]=useState([])
  useEffect(()=>{
    window.scroll(0,0)
    getData(setData)
  },[])


  document.addEventListener("click",function(event) {
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
  
  return <>
    <Navigation/>
    <MainSection data={data}  title={'Pizza'}/>
  </>
}

export default Pizza