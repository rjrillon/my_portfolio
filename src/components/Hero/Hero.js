import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Robin and I am student at San Francisco State University.
        In the upcoming Summer, I plan to explore internship opportunities!
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/robin-rillon-163162233/'}>Learn More</Button>
    </LeftSection>
  </Section>
  
);

export default Hero;