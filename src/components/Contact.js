import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Contact = () => {
    return (
        <div>
            <Navbar />
           
            <h1>Contact information</h1>
            <div>
            <h3>Lisa Bergström</h3>
            <p>Frontend developer</p> 
        
            </div>
            <div>
            <h3>Emma Berg</h3>
            <p>Frontend developer</p> 
      
            </div>
            <div>
            <h3>Terese Claesson</h3>
            <p>Frontend developer</p> 
          
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;