import React from 'react'
import Header from '../PageComponents/Header';
import Navigation from '../PageComponents/Navigation';




function Home() {
  

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

   

  window.scroll(0, 0)
  return <>
    <Navigation />
    <Header />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </>
}

export default Home