import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Allen's Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am passionate about developing apps that allow users to connect and learn from each other.
      </SectionText>
      <Button onClick={ () => window.open("https://resume.creddle.io/resume/922r3etvr20", '_blank')}>Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;