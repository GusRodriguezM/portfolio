import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        I'm Gustavo Rodríguez
      </SectionTitle>
      <SectionText>
        I'm a junior web developer looking to learn cool technologies to create amazing products.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;