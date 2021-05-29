import React, { Component, useState } from 'react';
import './DemoGoodsDescription.css';
import products from '../../../models/products.json';
import store from '../../../redux/Store';

const DemoGoodsDescription =()=>{

  const [size, setSize]= useState(null)
  const [sizeIndex, setSizeIndex]= useState(null)
  
  const selectSize = (size, index) => {
    if(sizeIndex === index) {
      setSize(null)
      setSizeIndex(null)
    } else{
      setSize(size)
      setSizeIndex(index)
    }
  }


  const addToCart = () => {
    if (size) {
      const action = {
        type: 'add_to_cart',
        value: {
          title: "Classic Tee",
          price: "$75.00",
          size: size,
          quantity:1
        }
      }
      store.dispatch(action);
    }
  }

    return (
      <div className='DemoGoodsDescription'>
        <div className='row'>
          <div className='col-12 font_arial font_midium DemoGoodsDescription_title'>{products.title}</div>
          <div className='hr'></div>
          <div className='col-12 font_bold DemoGoodsDescription_price'>{products.price}</div>
          <div className='hr'></div>
          <div className='col-12 font_small font_light_grey font_arial DemoGoodsDescription_description'>
            {products.description}
          </div>

          <div className='col-12 font_bold font_small font_light_grey size_margin'>
            SIZE<span className='DemoGoodsDescription_star'>*</span>
            <span className='font_dark_grey'>&nbsp;&nbsp;{size}</span>
          </div>

          <div className='col-12'>
            <div className='row'>
              {products.sizeOptions.map(
                (val, index) => {
                  return (
                    <div
                      className={
                        sizeIndex === index ?
                          'DemoGoodsDescription_size DemoGoodsDescription_selected' :
                          'DemoGoodsDescription_size'
                      }
                      key={index}
                      onClick={() => {
                        console.log('selectSize45, index', index);
                        console.log('selectSize45, sizeIndex', sizeIndex);
                        selectSize(val, index)
                      }}>{val}</div>
                  )
                }
              )}
            </div>
          </div>

          <div className='col-12'>
            <span
              className='DemoGoodsDescription_add'
              onClick={() => {
                addToCart()
              }}>ADD TO CART</span>
          </div>
        </div>
      </div>
    )
}


export default DemoGoodsDescription;
