import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import '../CSS/sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/dashboard' className='mylink'>Dashbaord</Link>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Races</Accordion.Header>
        <Accordion.Body className='AccordionBody'>
        <div><Link to='/races' className='mylink'>View Listings</Link></div>
       <div> <Link to='/raceform' className='mylink'>Add New</Link></div>
       <div> <Link to='/dashboard' className='mylink'>Add Results</Link></div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      <Link to='/racecourse' className='mylink'>RaceCourse</Link>
      <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Horses</Accordion.Header>
        <Accordion.Body className='AccordionBody'>
        <div><Link to='/horse' className='mylink'>View Listing</Link></div>
       <div> <Link to='/horseform' className='mylink'>Add New</Link></div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
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
