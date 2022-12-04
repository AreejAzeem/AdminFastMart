import React from 'react'
import "./featuredInfo.css"
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import MoneySharpIcon from '@mui/icons-material/MoneySharp';
import axios from 'axios'
import config from "../../config/config";
import { useEffect } from 'react';
import { useState } from 'react';

function FeaturedInfo(props) {
    const[length, setLength]=useState();
    useEffect(() => {
        getCustomer();
    
    },[]);
 const getCustomer = async () => {
    await axios({
       
       method: "GET",
       url: `${config.apiURL}/users/getUsers`,
       })
       .then((res) => {
         console.log(res.data);
         if(res.data.data){
         setLength(res.data.data.length);
       }
       }
       )
       .catch((err) => {
         console.log(err);
       }
       );
   }
 
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <div className='featuredImg'>
                <span>
                    <ArticleSharpIcon className='featuredImgIcon' size={70}/>
                    </span>
                </div>
            <span className='featuredTitle'>Today Revenue</span>
            <div className='featuredMoneyImgContainer'>
                <span className='featuredMoney'>Rs {" "+props.total}</span> 
             </div>
           
        </div>
        <div className='featuredItem'>
            <div className='featuredImg'>
                <span>
                    <ShoppingCartSharpIcon className='featuredImgIcon' size={70}/>
                    </span>
                </div>
            <span className='featuredTitle'>Today Products Sold</span>
            <div className='featuredMoneyImgContainer'>
                <span className='featuredMoney'>{props.quantity}</span> 
             </div>
           
        </div>
        <div className='featuredItem'>
            <div className='featuredImg'>
                <span>
                    <MoneySharpIcon className='featuredImgIcon' size='10px'/>
                    </span>
                </div>
            <span className='featuredTitle'>Users Registered</span>
            <div className='featuredMoneyImgContainer'>
                <span className='featuredMoney'>{length ? length:0}</span> 
             </div>
           
        </div>
    </div>
  )
}

export default FeaturedInfo