import React from 'react';
import Accordion from 'components/Accordion';
import Navbar from './Navbar';
import Footer from './Footer';


const Faq = () => {
  const accordionData = [
    {
      title: 'Crisis information',
      content: `Visit Pluralsight`
    },
    {
      title: 'Important information',
      content: `UD:s reseinformation`
    },
    {
      title: 'Transportation information',
      content: `Transportstyrelsen`
    },
    {
        title: 'Vaccination information',
        content: `Folkhälsomyndigheten`
      },
      {
        title: 'Försäkringar',
        content: `Försäkringskassan`
      }
  ];

  return (
    <div>
       <Navbar />
      <h1>FQA</h1>
      <div className="accordion">
        {accordionData.map(({ title, content}) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Faq;