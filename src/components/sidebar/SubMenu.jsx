import React from 'react';
import "./subMenu.css";
import {Link} from 'react-router-dom';
import "./subMenu.css";

function SubMenu({firstMenu,secondMenu}) {
  return (
    <div className='submenu' >
        <div className='submenu_wrapper'>
        <Link to="/sales&orders/sales" className='link'>
          <div className='submenu_item '>
            {firstMenu}
            </div>
            </Link>
            <Link to="/sales&orders/orders" className='link'>
            <div className='submenu_item' >
            {secondMenu}
            </div>
            </Link>
        </div>
    </div>
  )
}

export default SubMenu