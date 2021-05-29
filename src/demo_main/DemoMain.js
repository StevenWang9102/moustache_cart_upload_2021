import React from 'react';
import './DemoMain.css';
import Header from './demo_header/DemoHeader';
import Body from './demo_body/DemoBody';

function DemoMain() {
  return (
   <div className='DemoMain'>
      <Header/>
      <Body/>
   </div>
  );
}

export default DemoMain;
