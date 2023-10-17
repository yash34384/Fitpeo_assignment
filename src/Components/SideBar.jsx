/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../Styles/SideBar.scss';
import { Link } from 'react-router-dom';
import dp from '../assets/self-photo.png';

// main side bar function
function SideBar() {
  return (
    <section className="sidebar">
      <Title />
      <Menu />
      <Account />
    </section>
  );
}

// upper title function
function Title() {
  return (
    <div className="title">
      <i class="fa-solid fa-thumbtack" style={{ marginRight: 15 }}></i>
      <span>Dashboard</span>
    </div>
  );
}

// mid menu box function
function Menu() {
  return (
    <div className="options">
      <Link style={{ color: 'white', backgroundColor: '#2d2d69' }}>
        <i
          class="fa-solid fa-key icon"
          style={{ marginRight: 10, fontSize: '18px' }}
        ></i>
        Dashboard
      </Link>
      <Link>
        <i
          class="fa-solid fa-cube icon"
          style={{ marginRight: 10, fontSize: '18px' }}
        ></i>
        Product
      </Link>
      <Link>
        <i
          class="fa-solid fa-user icon"
          style={{ marginRight: 10, fontSize: '18px' }}
        ></i>
        Customers
      </Link>
      <Link>
        <i
          class="fa-solid fa-wallet icon"
          style={{ marginRight: 10, fontSize: '18px' }}
        ></i>
        Income
      </Link>
      <Link>
        <i
          class="fa-solid fa-percent icon"
          style={{ marginRight: 10, fontSize: '18px' }}
        ></i>
        Promote
      </Link>
      <Link>
        <i
          class="fa-solid fa-circle-question icon"
          style={{ marginRight: 10, fontSize: '18px' }}
        ></i>
        Help
      </Link>
    </div>
  );
}

// lower account box function
function Account() {
  return (
    <div className="account">
      <img src={dp} alt="DP" />
      <div className="holder">
        <div className="name">Yash Gupta</div>
        <div className="role">Project Manager</div>
      </div>
      <div className="bottom-arrow">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default SideBar;
