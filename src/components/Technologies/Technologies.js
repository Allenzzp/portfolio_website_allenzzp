import React from 'react';
import { DiCode, DiReact, DiNodejsSmall, DiPostgresql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. From Front-end to Back-end also including Design. Followings are my current tech stack, and I'm keeping updating and expending them.
    </SectionText>

    <List>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Javascript <br />
            Python <br />
            Java <br />
            Ruby <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            JQuery <br />
            SASS <br />
            HTML5, CSS3
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{display: "flex"}}>
          <DiNodejsSmall size="3rem" />
          <DiPostgresql size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express.js <br />
            Ruby on Rails <br />
            PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
