import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './side.css';
import { useState } from 'react';
import { FaExpandAlt } from "react-icons/fa";
import { FaCompressAlt } from "react-icons/fa";

import React from "react";
export default function Sidebar1(){
  const [collapsed,setCollapsed]=useState(true);
  const toggle =() =>{
    setCollapsed(!collapsed)
  }


    return(
        <>
   
       
<Sidebar className='Sidebar   shadow' collapsed={collapsed}>
{collapsed?<FaExpandAlt onClick={toggle}/>:<FaCompressAlt  onClick={toggle} />}

  <Menu
    menuItemStyles={{
      button: {
        
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/profile/info" />}> info</MenuItem>
    <MenuItem component={<Link to="/profile/order" />}> order</MenuItem>
    <MenuItem component={<Link to="/profile/image" />}> profile Image</MenuItem>
  </Menu>
</Sidebar>
        </>
    )
}