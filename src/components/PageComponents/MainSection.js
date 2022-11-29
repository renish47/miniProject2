import React from 'react'
import Card from '../Items/Card'
import Form from 'react-bootstrap/Form';

function MainSection({ data, title}) {

  let veg = data.filter((e)=>e.veg);
  let nv = data.filter((e)=>!e.veg);

  return <>
    <section className='pt-4 '>
      <div className="container-fluid px-5 px-lg-5 mainContainer">
        <h1 className='display-2 mb-5 text-center'>{title}</h1>
          
        {
          (title==='Pizza' || title==='All Products')?(<Form className='vnvFilter'>
          <Form.Check type="switch" className='switch' id="custom-switch1" onChange={(e)=>{
            if(e.target.checked){
              document.getElementById('all').classList.add('hide')
              document.getElementById('nv').classList.add('hide')
              document.getElementById('veg').classList.remove('hide')
              document.getElementById('custom-switch2').checked=false;
            }else{
              document.getElementById('all').classList.remove('hide')
              document.getElementById('veg').classList.add('hide')
            }
          }}/><i className="fa-solid ms-1 fa-circle vMark"
          ></i><br/>
          <Form.Check type="switch" className='switch' id="custom-switch2" onChange={(e)=>{
            if(e.target.checked){
              document.getElementById('all').classList.add('hide')
              document.getElementById('veg').classList.add('hide')
              document.getElementById('nv').classList.remove('hide')
              document.getElementById('custom-switch1').checked=false;
            }else{
              document.getElementById('all').classList.remove('hide')
              document.getElementById('nv').classList.add('hide')
            }
          }}/><i className="fa-solid ms-1 fa-circle nvMark" ></i>
        </Form>):<></>
        }
        <br /><br />
        <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center" id='all'>
          {
            data.map((e) => {
              return <Card key={e.id + e.name} data={e} />
            })
          }
        </div>
        <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center hide" id='veg'>
          {
            veg.map((e) => {
              return <Card key={e.id + e.name} data={e} />
            })
          }
        </div>
        <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center hide" id='nv'>
          {
            nv.map((e) => {
              return <Card key={e.id + e.name} data={e} />
            })
          }
        </div>
      </div>
    </section>
  </>
}

export default MainSection