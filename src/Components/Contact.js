import React from 'react'
import Section from './ReusableComponents/Section'
import { sectionsData } from "../data";
import Form from './ReusableComponents/Form';

const Contact = () => {
  return (
    <div className='Contact'>
        <div className="myContainer">
            <Section h2={sectionsData.contact.h2} p={sectionsData.contact.p.toLowerCase()} />
        </div>
    </div>
  )
}

export default Contact