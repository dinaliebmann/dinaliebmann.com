import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import TimelineLine from './TimelineLine';
import EventsContainer from './EventsContainer';
import EventWrapper from './EventWrapper';
import {
  TIMELINE_ICON_DIAMETER,
  TIMELINE_EVENT_WIDTH,
  TIMELINE_EVENT_WIDTH_REDUCED,
  TIMELINE_EVENT_POINTER_RADIUS,
  TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON,
} from '../constants/constants';
import EventSnippet from './EventSnippet';
import Event from './Event';

import xeLogo from '../assets/xeLogo.png';
import tdLogo from '../assets/tdLogo.png';
import capitalOneLogo from '../assets/capitalOneLogo.png';
import statcanLogo from '../assets/statcanLogo.png';
// import uwLogo from '../assets/uwLogo.png';

const getProp = (element, prop) => element.props[prop];

const compareDates = (date1, date2) => {
  if (date1 < date2) {
    return -1;
  }
  if (date1 > date2) {
    return 1;
  }
  return 0;
};

const TimelineUnstyled = ({ className, isDesktop }) => {
  // Add new events here (don't need to be sorted)
  // Any events with "isLeft" true should depend on isDesktop
  // I could do this automatically but I'm lazy.
  let events = [
    <EventSnippet
      date={new Date('2020-04-15')}
      type="education"
      title="Graduated from UWaterloo with a Bachelor of Mathematics on the Dean's Honours List"
      isDesktop={isDesktop}
    />,
    <Event
      date={new Date('2019-09-03')}
      date2={new Date('2019-12-20')}
      type="work"
      isLeft={isDesktop}
      icon={xeLogo}
      title="XE"
      subtitle="Data Scientist"
      points={[
        'Designed the new pricing platform',
        'Performed analyses using Sagemaker, QuickSight and Athena',
        'Went to the Toronto Machine Learning Summit',
      ]}
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2019-10-16')}
      type="hobbies"
      title="Bought my first needle felting kit"
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2019-08-07')}
      type="hobbies"
      title="Performed at the Uptown Waterloo Jazz Festival"
      isDesktop={isDesktop}
    />,
    <Event
      date={new Date('2019-01-07')}
      date2={new Date('2019-04-26')}
      type="work"
      isLeft={isDesktop}
      icon={xeLogo}
      title="XE"
      subtitle="Data Scientist"
      points={[
        'Analyzed web traffic post-GDPR',
        'Forecasted varying traffic cases using Adobe Analytics and Excel',
        'Mildly improved at foosball',
      ]}
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2018-12-25')}
      date2={new Date('2019-01-06')}
      type="travel"
      title="Visited family in South Africa"
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2018-09-15')}
      type="education"
      title="Became an executive math ambassador"
      isDesktop={isDesktop}
    />,
    <Event
      date={new Date('2018-05-07')}
      date2={new Date('2018-08-28')}
      type="work"
      isLeft={isDesktop}
      icon={tdLogo}
      title="TD Bank Group"
      subtitle="Retail Risk Model Developer"
      points={[
        'Tested linear and logistic models',
        'Increased the efficiency of the team by automating the manual effort of copying and pasting SAS output',
      ]}
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2018-01-02')}
      type="hobbies"
      title="Started learning Muay Thai"
      isDesktop={isDesktop}
    />,
    <Event
      date={new Date('2017-09-02')}
      date2={new Date('2017-12-22')}
      type="work"
      isLeft={isDesktop}
      icon={capitalOneLogo}
      title="Capital One"
      subtitle="Data Analyst"
      points={[
        'Built a recommendation engine in Python using NLP',
        'Taught myself and implemented Naive Bayes',
        'Presented my work at a Capital One "Dragon\'s Den"',
      ]}
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2017-04-15')}
      type="education"
      title="Declared my statistics major and computer science minor"
      isDesktop={isDesktop}
    />,
    <Event
      date={new Date('2017-01-09')}
      date2={new Date('2017-04-28')}
      type="work"
      isLeft={isDesktop}
      icon={statcanLogo}
      title="Statistics Canada"
      subtitle="Analyst"
      points={[
        'Researched economic data to compare against existing data',
        'Clearly documented and communicated findings',
        'Explored downtown Ottawa in the height of winter',
      ]}
      isDesktop={isDesktop}
    />,
    <EventSnippet
      date={new Date('2015-05-07')}
      type="education"
      title="Accepted to UWaterloo with President's Scholarship"
      isDesktop={isDesktop}
    />,
  ];

  events.sort(compareDates);

  let eventWrappers = events.map((eventElement, index) => (
    <EventWrapper
      key={index}
      isLeft={!isDesktop && getProp(eventElement, 'isLeft')}
      type={getProp(eventElement, 'type')}
      isDesktop={isDesktop}
    >
      {eventElement}
    </EventWrapper>
  ));

  return (
    <div className={className}>
      <EventsContainer>{eventWrappers}</EventsContainer>
      <TimelineLine isDesktop={isDesktop} />
    </div>
  );
};

const Timeline = styled(TimelineUnstyled)`
  ${flexCenter};
  position: relative;
  width: ${props =>
    props.isDesktop
      ? 2 *
        (TIMELINE_EVENT_WIDTH +
          TIMELINE_EVENT_POINTER_RADIUS +
          TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON +
          TIMELINE_ICON_DIAMETER / 2)
      : TIMELINE_EVENT_WIDTH_REDUCED +
        TIMELINE_EVENT_POINTER_RADIUS +
        TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON +
        TIMELINE_ICON_DIAMETER / 2}px;
  padding-top: 20px;
`;

export default Timeline;
