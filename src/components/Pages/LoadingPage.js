import React from 'react'
import Navigation from '../PageComponents/Navigation';
import Footer from '../PageComponents/Footer';



function LoadingPage() {
  return <>
    <Navigation/>
    <h2 className='text-center loading'>Loading...</h2>
    <Footer/>
  </>
}

export default LoadingPage