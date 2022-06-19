// import React, { useState } from 'react';
// const Accordion = ({ title, content }) => {
//   const [isActive, setIsActive] = useState(false);
//   return (
//     <div className="accordion-item">
//       <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
//         <div>{title}</div>
//         <div>{isActive ? '-' : '+'}</div>
//       </div>
//       {isActive && <div className="accordion-content">{content}</div>}
//     </div>
//   );
// };
// export default Accordion;

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