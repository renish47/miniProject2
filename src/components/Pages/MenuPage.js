// import React, { useState, useEffect } from 'react'
// import {useParams} from 'react-router-dom'
// import Footer from '../PageComponents/Footer'
// import MainSection from '../PageComponents/MainSection'
// import Navigation from '../PageComponents/Navigation'
// import axios from 'axios'
// import PreFooter from '../PageComponents/PreFooter'

// function MenuPage() {
//   let params = useParams()
//  let [title,setTitle]=useState(params.id)
//  let [data, setData] = useState([])


//   let getData = async () => {
//     try {
//       if(params.id==='all-products'){
//         setTitle('All Products')
//         let pizza = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/PizzaData');
//         if (pizza.status === 200) {
//           let Drinks = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/DrinksData');
//           if (Drinks.status === 200) {
//             let Dessert = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/DessertData');
//             if (Dessert.status === 200) {
//               setData([...pizza.data, ...Drinks.data, ...Dessert.data])
//             }
//           }
//         }
//       }
//       else if(params.id==='pizza'){
//         setTitle('Pizza')
//         let pizzaData = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/PizzaData');
//         if(pizzaData.status===200)
//           setData(pizzaData.data)
//       }
//       else if(params.id==='dessert'){
//         setTitle('Dessert')
//         let DessertData = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/DessertData');
//         if(DessertData.status===200)
//           setData(DessertData.data)
//       }
//       else if(params.id==='drinks'){
//         setTitle('Drinks')
//         let DrinksData = await axios.get('https://6383737b6e6c83b7a993f4e3.mockapi.io/DrinksData');
//         if(DrinksData.status===200)
//         setData(DrinksData.data)
//       }
//     }
//     catch { console.log('err') }
//   }

//   useEffect(() => {
//     window.scroll(0,0)
//     getData()
//   })

//   return <>
//     <Navigation />
//     <MainSection data={data} title={title}/>
//     <br/><br/>
//     <PreFooter/>
//     <br/><br/>
//     <Footer />
//   </>
// }

// export default MenuPage