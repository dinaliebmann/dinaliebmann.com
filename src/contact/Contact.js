import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  HEADER_FONT,
  BOX_SHADOW,
  PRIMARY,
  PARAGRAPH_FONT,
  LIGHT_GREY_1,
} from '../constants/theme';

import linkedinSvg from '../assets/linkedin.svg';
import githubSvg from '../assets/github.svg';
import resume from '../assets/resume.pdf';

const ContactUnstyled = ({ className, isDesktop }) => {
  return isDesktop ? (
    <div className={className}>
      <div className="contact-header">Contact</div>
      <div className="contact-methods-container">
        <div className="contact-method-wrapper">
          <a
            className="contact-link"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-method-icon-container">
              <i className="material-icons">description</i>
            </div>
          </a>
          <div className="contact-method-subtitle">Resume</div>
        </div>
        <div className="contact-method-wrapper">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/dina-liebmann-0367a9122/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-method-icon-container">
              <img className="linkedin-icon" src={linkedinSvg} alt="IN" />
            </div>
          </a>
          <div className="contact-method-subtitle">LinkedIn</div>
        </div>
        <div className="contact-method-wrapper">
          <a
            className="contact-link"
            href="https://github.com/dinaliebmann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-method-icon-container">
              <img className="github-icon" src={githubSvg} alt="IN" />
            </div>
          </a>
          <div className="contact-method-subtitle">GitHub</div>
        </div>
        <div className="contact-method-wrapper">
          <a className="contact-link" href="mailto: dina.liebmann@gmail.com">
            <div className="contact-method-icon-container">
              <i className="material-icons">mail_outline</i>
            </div>
          </a>
          <div className="contact-method-subtitle">Email</div>
        </div>
      </div>
    </div>
  ) : (
    <div className={className}>
      <div className="contact-header">Contact</div>
      <div className="contact-methods-container">
        <div className="contact-method-row">
          <div className="contact-method-wrapper">
            <a
              className="contact-link"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-method-icon-container">
                <i className="material-icons">description</i>
              </div>
            </a>
            <div className="contact-method-subtitle">Resume</div>
          </div>
          <div className="contact-method-wrapper">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/dina-liebmann-0367a9122/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-method-icon-container">
                <img className="linkedin-icon" src={linkedinSvg} alt="IN" />
              </div>
            </a>
            <div className="contact-method-subtitle">LinkedIn</div>
          </div>
        </div>
        <div className="contact-method-row">
          <div className="contact-method-wrapper">
            <a
              className="contact-link"
              href="https://github.com/dinaliebmann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-method-icon-container">
                <img className="github-icon" src={githubSvg} alt="IN" />
              </div>
            </a>
            <div className="contact-method-subtitle">GitHub</div>
          </div>
          <div className="contact-method-wrapper">
            <a className="contact-link" href="mailto: dina.liebmann@gmail.com">
              <div className="contact-method-icon-container">
                <i className="material-icons">mail_outline</i>
              </div>
            </a>
            <div className="contact-method-subtitle">Email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = styled(ContactUnstyled)`
  margin-bottom: 50px;

  .contact-header {
    ${flexCenter};
    height: 100px;
    font-family: ${HEADER_FONT};
    font-size: ${props => (props.isDesktop ? 40 : 30)}px;
    margin-top: 40px;
  }

  .contact-methods-container {
    ${flexCenter};

    ${props => !props.isDesktop && 'flex-direction: column'};
    .contact-method-row {
      ${flexCenter};
      :not(:last-child) {
        margin-bottom: 15px;
      }
    }

    .contact-method-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      :not(:last-child) {
        margin-right: 20px;
      }

      .contact-link {
        text-decoration: none;
      }

      .contact-method-icon-container {
        ${flexCenter};
        height: 65px;
        width: 65px;
        border-radius: 50%;
        box-shadow: ${BOX_SHADOW};
        cursor: pointer;
        background-color: ${PRIMARY};

        .material-icons {
          color: ${LIGHT_GREY_1};
          font-size: 30px;
        }

        .github-icon {
          width: 28px;
        }

        .linkedin-icon {
          width: 28px;
        }
      }

      .contact-method-subtitle {
        cursor: pointer;
        padding-top: 3px;
        font-family: ${PARAGRAPH_FONT};
        font-size: 15px;
      }
    }
  }
`;

export default Contact;
