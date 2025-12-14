import React, { useState,useRef } from 'react';
import './App.css'
import Header from './userapplication/Header';
import Test from './Counter';
export default function App() {
  return (
    <>
    
      {/* <Hoc/>
      <RenderProps/>
      <UseHook/> */}
      {/* <FocusDelayDemo/> */}
      <div className='app'>
        <Test/>
      </div>
      
    </>
  )
}