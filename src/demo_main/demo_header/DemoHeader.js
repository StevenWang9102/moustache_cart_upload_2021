import React, { Fragment, useState } from 'react';
import './DemoHeader.css';
import store from '../../redux/Store';
import DemoMiniCart from '../demo_body/demo_mini_cart/DemoMiniCart';
import cart from './cart.jpg'

const DemoHeader = () => {
  const [storeState, setStorState] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isDropDownActive, setIsDropDownActive] = useState(false)

  store.subscribe(() => {
    setStorState(store.getState())
  })

  console.log('store.getState()', storeState);
  window.onresize = function() {
  // When screen chage 
    if(document.body.clientWidth <= 400){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
}
  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mt-3 DemoHeader'>
            <div className={isDropDownActive ? 'DemoHeader_cart isDropDownActive' : 'DemoHeader_cart'}>
              <span className='col-md-3' 
                onMouseOver={() => !isMobile && storeState && setIsDropDownActive(!isDropDownActive)}
                onMouseOut={() => !isMobile && storeState && setIsDropDownActive(!isDropDownActive)}
                onClick={() => isMobile && storeState && setIsDropDownActive(!isDropDownActive)}
              >
                {isMobile? 
                  <>
                    <img style={{height: 22}} src={cart}/> 
                    {`(${storeState ? storeState.counter : 0})`}
                  </>
                :`My Cart (${storeState ? storeState.counter : 0})`}
              </span>
            </div>
          </div>
        </div>
        
        <div className='col-md-12' >
          {
            isDropDownActive && storeState &&
              <div className='DemoHeader_dropdown'>
                <DemoMiniCart/>
              </div>
          }
        </div>
      </div>
    </Fragment>
  )
}

export default DemoHeader;
