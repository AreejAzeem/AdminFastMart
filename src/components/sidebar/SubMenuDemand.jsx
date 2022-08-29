import React from 'react';
import "./subMenu.css";
import {Link} from 'react-router-dom';
import "./subMenuDemand.css";


function SubMenuDemand({firstMenu,secondMenu,thirdMenu}) {
  return (
    <div className='submenuDemand' >
        <div className='submenuDemand_wrapper'>
        <Link to="/demands/pending" className='link'>
          <div className='submenuDemand_item '>
            {firstMenu}
            </div>
            </Link>
            <Link to="/demands/accepted" className='link'>
            <div className='submenuDemand_item' >
            {secondMenu}
            </div>
            </Link>
            <Link to="/demands/rejected" className='link'>
            <div className='submenuDemand_item' >
            {thirdMenu}
            </div>
            </Link>
        </div>
    </div>
  )
}

export default SubMenuDemand;