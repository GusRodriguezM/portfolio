import React from 'react';
import { DiFirebase, DiReact, DiDatabase } from 'react-icons/di';
import { SiStyledComponents } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with some technologies like
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <AiOutlineCloudServer size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Firebase <br/>
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDatabase size="3rem"/>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MongoDB <br/>
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiStyledComponents size="3rem"/>
        <ListContainer>
          <ListTitle>Styling</ListTitle>
          <ListParagraph>
            Sass <br/>
            Material-UI <br/>
            CSS-in-JS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaGitAlt size="3rem"/>
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Git <br/>
            Github <br/>
            Gitlab
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;