import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBar';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div value={{ color: '#fff' }}>
        <div className='explore-button'>
          <Link to='#' className='menu-bars'>
            <h1 onClick={showSidebar} > EXPLORE </h1>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <table className="table">
            <tr className="x-tr">
                <td></td>
                <td>
                <div className='nav-menu-items' onClick={showSidebar}>
                  <div className='navbar-toggle'>
                    <Link to='#' className='menu-bars-x' >
                      <span className='x'>&times;</span>
                    </Link>
                  </div>
                </div>
                </td>
            </tr>
            <tr>
              <td>
            {SidebarData.map((item, index) => {
                  return (
                    <td key={index} className={item.cName}>
                      <Link to={item.path}>
                        <span>00{index}</span>
                      </Link>
                    </td>
                );
            })}
            </td>
            <td>
                {SidebarData.map((item, index) => {
                  return (
                    <td key={index} className={item.cName}>
                      <Link to={item.path}>
                        <span>{item.title}</span>
                      </Link>
                    </td>
                );
            })}
            </td>
            </tr>
          </table>

          {/* <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars-x' >
              <span className='x'>&times;</span>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul> */}
        </nav>
      </div>
    </>
  );
}

export default Navbar;