import React from 'react';
import classes from "./contact.module.css";
import FirstSection from '../../components/screenComponents/contactScreen/firstSection';

function index() {
  return (
    <div className={classes.contact_section}>
        <FirstSection/>
    </div>
  )
}

export default index