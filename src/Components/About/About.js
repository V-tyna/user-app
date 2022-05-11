import React from 'react';
import './About.css'

const About = () => {

    return (
   <div className='About'>
       <h3>Very important information about this application</h3>
       <button type="button" onClick={() => window.location.pathname = '/'}>Back to home page</button>
   </div>
    )
}

export default About;