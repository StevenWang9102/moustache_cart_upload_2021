import React, { useState } from 'react';
import store from '../../../redux/Store';
import tee from '../../../assets/img/classic-tee.jpg';
import './DemoMiniCart.css';

const DemoMiniCart = ()=> {

  const [states, setStates] = useState(store.getState())

  console.log('states.list', states);
    return (
      <>
      {states && <div className="DemoMiniCart" >
        {
          states && states.list.map(
            (val,index) => {
              return (
                <div className='row DemoMiniCart_item_group font_dark_grey' key={index}>
                  <div className='col-4 DemoMiniCart_img'>
                    <img src={tee}></img>
                  </div>

                  <div className='col-8'>
                    <div className='row'>
                      <div className='col-12 DemoMiniCart_title font_dark_grey font_arial DemoMiniCart_item'>
                        {val.title}
                      </div>

                      <div className='col-12 DemoMiniCart_title DemoMiniCart_item'>
                        {val.quantity} x <span className='font_bold'>{val.price}</span>
                      </div>

                      <div className='col-12 DemoMiniCart_title font_arial DemoMiniCart_item'>
                        Size: {val.size}
                      </div>

                    </div>
                  </div>
                </div>
              )
            }
          )
        }
      </div> }
      
      </>
    )
}

export default DemoMiniCart;
