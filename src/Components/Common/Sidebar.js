import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/dashboard' className='mylink'>Dashbaord</Link>
      <Link to='/races' className='mylink'>Races</Link>
      <Link to='/horse' className='mylink'>Horse</Link>
      <Link to='/jockey' className='mylink'>Jockey</Link>
      <Link to='/trainer' className='mylink'>Trainer</Link>
      <Link to='/competition' className='mylink'>Competition</Link>
      <Link to='/statistics' className='mylink'>Statistics</Link>
      <Link to='/news' className='mylink'>News</Link>
      <Link to='/ads' className='mylink'>Ads</Link>
      <Link to='/sponsor' className='mylink'>Sponsor</Link>
    </div>
  )
}

export default Sidebar
