import React from 'react'
import Sidebar from '../Components/Common/Sidebar';
import '../Components/CSS/home.css'
import Header from "../Components/Common/Header";

const Dashboard = () => {
  return (
    <>
    <Header />
    <div className='page'>
      <Sidebar />
      <div className='rightsidedata'>
        <h1>Dashboard</h1>
      </div>
    </div>
    </>
  )
}

export default Dashboard
