import React, { useState } from 'react';

import { AccordionItem, AccordionTitle, TitleActive, AccContent, PlusMinus } from "./FaqStyle";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <AccordionItem>
      <TitleActive onClick={() => setIsActive(!isActive)}>
        <AccordionTitle>{title}</AccordionTitle>
        <PlusMinus>{isActive ? '-' : '+'}</PlusMinus>
      </TitleActive>
      {isActive && <AccContent>{content}</AccContent>}
    </AccordionItem>
  );
};
export default Accordion;