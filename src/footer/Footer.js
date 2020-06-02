import React from 'react';
import styled from 'styled-components';
import { PARAGRAPH_FONT, DARK_GREY_2 } from '../constants/theme';
import { ProjectDescriptionLink } from '../projects/ProjectCard';

const FooterUnstyled = ({ className }) => {
  return (
    <div className={className}>
      Website designed and created by&nbsp;
      <ProjectDescriptionLink
        href="http://www.jonahdlin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jonah Dlin
      </ProjectDescriptionLink>
      .
    </div>
  );
};

const Footer = styled(FooterUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-family: ${PARAGRAPH_FONT};
  color: ${DARK_GREY_2};
`;

export default Footer;
