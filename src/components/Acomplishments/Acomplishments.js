import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './AcomplishmentsStyles';
import { ExternalLinks, UtilityList } from '../Projects/ProjectsStyles';

const data = [
  { text: 'React: De cero a experto', url: 'https://www.udemy.com/certificate/UC-4ad954ff-c895-4fb1-8c6f-f10e042e908c/'},
  { text: 'The Modern React Bootcamp', url: 'https://www.udemy.com/certificate/UC-a3e3c331-01b4-4766-8c80-a218ef63b1a6/'},
  { text: 'Scrum Fundamentals Certified', url: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=812924'},
  { text: 'Scrum Master Certified', url: 'https://www.scrumstudy.com/certification/verify?type=SMC&number=813223'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Acomplishments
    </SectionTitle>
    <Boxes>
      {
        data.map((card, index) => (
          <Box key={index}>
            <BoxText>{card.text}</BoxText>
            <UtilityList>
              <ExternalLinks href={card.url} style={{background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'}}>Learn More</ExternalLinks>
            </UtilityList>
          </Box>
        ))
      }
    </Boxes>
  </Section>
);

export default Acomplishments;