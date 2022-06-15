import React from 'react';
import Accordion from 'components/Accordion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Header } from "./FaqStyle";


const Faq = () => {
  const accordionData = [
    {
      title: 'What to think about!',
      content: `
      -take out travel insurance or check if you have home insurance with travel protection before the trip begins
      -have a valid passport and visa
      -check if you need to be vaccinated
      -contact the embassy or nearest consulate in the country where you are if there is a war or crisis, or if a natural disaster or major accident occurs
      -contact your relatives in a crisis situation
      -never bring packages or bags with unknown contents when crossing a border.

      When you are a guest in another country - remember to follow the country's customs and laws.
      `
    },
    {
      title: 'What if there is a emergency abroad?',
      content: `If you have become seriously ill, been involved in an accident or been exposed to crime, you should contact your insurance company's alarm center. They can help you with practical questions about healthcare, offer crisis support and answer questions about return journey / ambulance.`
    },
    {
      title: 'Do I need to vaccinate before travel?',
      content: `
      Regarding vaccination before the trip, we recommend that you contact your doctor, health center or vaccination center.`
    },
    {
      title: 'Do I need travel insurance?',
      content: `Keep in mind that
      take out travel insurance or check if you have home insurance with travel protection before the trip begins`
    },
    {
        title: 'Do you have a visa question?',
        content: `Check the current entry regulations with the authorities of the country's you are traveling to or the countrys nearest embassy.`
      },
      {
        title: 'When does the embassy open and close?',
        content: `Information about the embassies' opening hours and telephone hours can be found on each embassy's page.
        In the event of an emergency emergency abroad, outside the embassy's regular opening hours, you can always reach the official on duty at the Ministry of Foreign Affairs by calling the embassy's telephone exchange and following the instructions.`
      }
  ];

  return (
    <div>
       <Navbar />
      <Header>FAQ Travel Questions</Header>
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