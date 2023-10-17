/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import '../Styles/Dashboard.scss';
import underwater from '../assets/underwater.jpg';
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  Title
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  Title
);

function Dasboard() {
  // all the components are written below
  return (
    <section className="dashboard">
      <Navbar />
      <Transaction />
      <Charts />
      <Product />
    </section>
  );
}

// navbar Component
function Navbar() {
  return (
    <div className="navbar">
      <div className="name">
        Hello Yash Gupta{' '}
        <i
          class="fa-solid fa-hand"
          style={{ fontSize: '18px', color: '#E8BEAC' }}
        ></i>
      </div>
      <input type="search" placeholder="🔍search" className="search" />
    </div>
  );
}

// all the transaction boxes are in this Component
// using api this Component will become dynamic using hooks
// where data will come from api
function Transaction() {
  return (
    <div className="transaction">
      <div className="trans-box">
        <div className="logo" style={{ backgroundColor: '#E3FFF0' }}>
          💲
        </div>
        <div className="details">
          <div className="topic">Earning</div>
          <div className="amount">&#36; 198k</div>
          <div className="current">
            <span
              style={{
                fontSize: '1.5rem',
                color: 'green',
                fontWeight: '600'
              }}
            >
              &#8593; 37.8%
            </span>{' '}
            this month
          </div>
        </div>
      </div>
      <div className="trans-box">
        <div className="logo" style={{ backgroundColor: '#E7DBFF' }}>
          🗒️
        </div>
        <div className="details">
          <div className="topic">Orders</div>
          <div className="amount">&#36; 2.4k</div>
          <div className="current">
            <span
              style={{
                fontSize: '1.5rem',
                color: 'red',
                fontWeight: '600'
              }}
            >
              &#8595; 2%
            </span>{' '}
            this month
          </div>
        </div>
      </div>
      <div className="trans-box">
        <div className="logo" style={{ backgroundColor: '#CCF2FF' }}>
          🪙
        </div>
        <div className="details">
          <div className="topic">Balance</div>
          <div className="amount">&#36; 2.4k</div>
          <div className="current">
            <span
              style={{
                fontSize: '1.5rem',
                color: 'red',
                fontWeight: '600'
              }}
            >
              &#8595; 2%
            </span>{' '}
            this month
          </div>
        </div>
      </div>
      <div className="trans-box">
        <div className="logo" style={{ backgroundColor: '#FEBADF' }}>
          👜
        </div>
        <div className="details">
          <div className="topic">Total Sales</div>
          <div className="amount">&#36; 89k</div>
          <div className="current">
            <span
              style={{
                fontSize: '1.5rem',
                color: 'green',
                fontWeight: '600'
              }}
            >
              &#8593; 11%
            </span>{' '}
            this week
          </div>
        </div>
      </div>
    </div>
  );
}

function Charts() {
  // this data can be dynamic using backend data
  const data_for_bar = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        label: '',
        data: [7, 5, 10, 8, 9, 3, 9, 10, 9, 8, 7, 8],
        backgroundColor: '#E7DBFF'
      }
    ]
  };
  const options_for_bar = {};

  const data_for_pie = {
    datasets: [
      {
        data: [7, 5, 10],
        backgroundColor: ['red', 'yellow', 'green']
      }
    ]
  };

  return (
    <div className="chart">
      <div className="bargraph">
        <div className="heading">
          <div>
            <div style={{ fontSize: '2rem', fontWeight: '600' }}>Overview</div>
            <div style={{ fontSize: '1.25rem', color: '#777b9d' }}>
              Monthly Earning
            </div>
          </div>
          <select className="select">
            <option value="quarterly">Quarterly</option>
          </select>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Bar
            data={data_for_bar}
            options={options_for_bar}
            style={{ width: '100%', height: '100%' }}
          ></Bar>
        </div>
      </div>
      <div className="piechart">
        <div className="heading">
          <div>
            <div style={{ fontSize: '2rem', fontWeight: '600' }}>Customers</div>
            <div style={{ fontSize: '1.25rem', color: '#777b9d' }}>
              Customers that buy products
            </div>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Doughnut
            data={data_for_pie}
            style={{ width: '65%', height: '25vh' }}
          ></Doughnut>
        </div>
      </div>
    </div>
  );
}

// rows of products are in this Component
function Product() {
  return (
    <div className="product">
      <div className="heading">
        <div style={{ fontSize: '2rem', fontWeight: '600' }}>Product Sell</div>
        <div>
          <input type="search" placeholder="🔍search" className="search" />
          <select className="select">
            <option value="quarterly">Last 30 days </option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        {/* using api this Component will become dynamic using hooks 
        where data will come from api */}
        <tbody>
          <tr>
            <td className="single_product">
              <img
                src={underwater}
                alt="images"
                style={{
                  height: '4rem',
                  borderRadius: '5px',
                  marginRight: '1.5rem'
                }}
              />
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                  Abstract 3D
                </div>
                <div style={{ fontSize: '1.25rem' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </td>
            <td style={{ fontSize: '1.25rem' }}>32 in stocks</td>
            <td style={{ fontSize: '1.5rem', fontWeight: '600' }}>$ 45.99</td>
            <td style={{ fontSize: '1.25rem' }}>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dasboard;
