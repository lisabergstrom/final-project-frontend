import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import lisa from "../assets/lisa.png"
import emma from "../assets/emma.jpg"
import terese from "../assets/terese.jpg"


import { ContactConatiner, ContactHeading, ContactBox, ContactImage, Contributors,LinkContainer, Description, ContactLinks} from "./ContactStyles"

const Contact = () => {
    return (
        <div>
            <Navbar />
            <ContactHeading>Contact information</ContactHeading>
            <ContactConatiner>
                <ContactBox>
                    <Contributors>Lisa Bergström</Contributors>
                    <Description>Frontend developer with background in the travel industry.</Description>
                    <LinkContainer>
                    <ContactImage src={lisa} alt="photo of Lisa" />
                    <ContactLinks aria-label="Lisas portfolio" href="https://github.com/lisabergstrom/project-portfolio" target="_blank"
                        title="Lisa Bergstrom portfolio">Lisas Portfolio</ContactLinks>
                    <ContactLinks aria-label="Lisas linkedin" href="https://www.linkedin.com/in/lisabergstrom1001/" target="_blank"
                        title="Lisa Bergstrom linkedin">LinkedIn</ContactLinks>
                    </LinkContainer>
                </ContactBox>

                <ContactBox>
                    <Contributors>Emma Berg</Contributors>
                    <Description>Frontend developer with background in Medical Biology</Description>
                    <LinkContainer>
                    <ContactImage src={emma} alt="photo of Emma" />
                    <ContactLinks aria-label="Lisas portfolio" href="https://emmabergsportfolio.netlify.app/" target="_blank"
                        title="Emma Berg portfolio">Emmas portfolio</ContactLinks>
                    <ContactLinks aria-label="Lisas linkedin" href="https://www.linkedin.com/in/emma-berg-196769139/" target="_blank"
                        title="Emma Berg linkedin">LinkedIn</ContactLinks>
                    </LinkContainer>
                </ContactBox>

                <ContactBox>
                    <Contributors>Terese Claesson</Contributors>
                    <Description>Frontend developer and educated business developer with background in medical science </Description>
                    <LinkContainer>
                    <ContactImage src={terese} alt="photo of Terese"/>
                    <ContactLinks aria-label="Lisas portfolio" href="https://tereses-portfolio.netlify.app/" target="_blank"
                        title="Terese Claessons portfolio">Tereses portfolio</ContactLinks>
                    <ContactLinks aria-label="Lisas linkedin" href="https://www.linkedin.com/in/terese-claesson-1b0385181/" target="_blank"
                        title="Terese Claessons linkedin">LinkedIn</ContactLinks>
                    </LinkContainer>
                </ContactBox>
            </ContactConatiner>
            <Footer />
        </div>
    )
}

export default Contact;