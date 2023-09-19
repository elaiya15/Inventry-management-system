// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { useState} from "react";
import spin from "./748 (1).gif";

import { Wave } from 'react-animated-text';

import "./loder.css";
const Loder = () => {

 
  
    // let [loading, setLoading] = useState(true);
  return (
    <>
   <div className="loading">
   <img className="spin" src={spin}/> 
   
   <div className="load"> <Wave text="LOADING DATA..." effect="stretch"
          effectChange={2} /></div>
   
    </div>

    
    </>
  )
}

export default Loder
