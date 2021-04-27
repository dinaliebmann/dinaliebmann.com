import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../constants/mixins';
import {
  TIMELINE_EVENT_WIDTH,
  TIMELINE_EVENT_WIDTH_REDUCED,
  TIMELINE_ICON_OFFSET_FROM_TOP,
  TIMELINE_EVENT_POINTER_RADIUS,
  TIMELINE_ICON_DIAMETER,
  monthsMap,
  EVENT_DESCRIPTION_BULLET,
  monthsAbbrevMap,
} from '../constants/constants';
import {
  BOX_SHADOW,
  LIGHT_GREY_1,
  LIGHT_GREY_4,
  HEADER_FONT,
  PARAGRAPH_FONT,
  DARK_GREY_2,
} from '../constants/theme';

const EventUnstyled = ({
  className,
  date,
  date2,
  icon,
  title,
  subtitle,
  points,
  isLeft,
  isDesktop,
}) => {
  let dateString = '';
  if (date2 === undefined) {
    const month = monthsMap[date.getMonth()];
    const year = date.getFullYear();
    dateString = `${month} ${year}`;
  } else if (typeof date2 === 'string') {
    const month1 = monthsAbbrevMap[date.getMonth()];
    const year1 = date.getFullYear();
    dateString = `${month1} ${year1} - ${date2}`;
  } else {
    const month1 = monthsAbbrevMap[date.getMonth()];
    const year1 = date.getFullYear();
    const month2 = monthsAbbrevMap[date2.getMonth()];
    const year2 = date2.getFullYear();
    if (year1 === year2) {
      dateString = `${month1} - ${month2} ${year1}`;
    } else {
      dateString = `${month1} ${year1} - ${month2} ${year2}`;
    }
  }

  let eventDescriptions;
  if (points && points.length) {
    const descriptions = points.map((point, index) => (
      <div className="event-description" key={index}>
        {`${EVENT_DESCRIPTION_BULLET}  ${point}`}
      </div>
    ));
    eventDescriptions = (
      <div className="event-descriptions">{descriptions}</div>
    );
  }

  return (
    <div className={className}>
      <div className="event-content">
        <div className="event-header">
          <div className="event-icon-container">
            <img className="event-icon" src={icon} alt="" />
          </div>
          <div className="event-titles-container">
            <div className="event-title">{title}</div>
            <div className="event-subtitle">{subtitle}</div>
          </div>
          <div className="event-date">{dateString}</div>
        </div>
        {eventDescriptions}
      </div>
    </div>
  );
};

const EVENT_POINTER_OFFSET_FROM_TOP =
  TIMELINE_ICON_OFFSET_FROM_TOP +
  TIMELINE_ICON_DIAMETER / 2 -
  TIMELINE_EVENT_POINTER_RADIUS;

const eventPointerBeforeStyling = props => {
  if (props.isLeft) {
    return `\
border-left: ${TIMELINE_EVENT_POINTER_RADIUS}px solid ${LIGHT_GREY_4};
left: ${
      props.isDesktop
        ? TIMELINE_EVENT_WIDTH - 2
        : TIMELINE_EVENT_WIDTH_REDUCED - 2
    }px;`;
  } else {
    return `\
border-right: ${TIMELINE_EVENT_POINTER_RADIUS}px solid ${LIGHT_GREY_4};
left: ${-2 * TIMELINE_EVENT_POINTER_RADIUS}px;`;
  }
};

const eventPointerAfterStyling = props => {
  if (props.isLeft) {
    return `\
border-left: ${TIMELINE_EVENT_POINTER_RADIUS - 1}px solid ${LIGHT_GREY_1};
left: ${
      props.isDesktop
        ? TIMELINE_EVENT_WIDTH - 2.3
        : TIMELINE_EVENT_WIDTH_REDUCED - 2.3
    }px;`;
  } else {
    return `\
border-right: ${TIMELINE_EVENT_POINTER_RADIUS - 1}px solid ${LIGHT_GREY_1};
left: ${-2 * TIMELINE_EVENT_POINTER_RADIUS + 2.3}px;`;
  }
};

const Event = styled(EventUnstyled)`
  position: relative;
  ${flexCenter};
  ${props => (props.isLeft ? 'margin-right: auto' : 'margin-left: auto')};
  box-shadow: ${BOX_SHADOW};

  .event-content {
    position: relative;
    z-index: 10;
    border: 1px solid ${LIGHT_GREY_4};
    background-color: ${LIGHT_GREY_1};
    width: ${props =>
      props.isDesktop ? TIMELINE_EVENT_WIDTH : TIMELINE_EVENT_WIDTH_REDUCED}px;
    padding: 15px;

    .event-header {
      ${flexCenter};
      width: 100%;

      .event-icon-container {
        ${flexCenter};
        height: ${props => (props.isDesktop ? 75 : 40)}px;
        width: ${props => (props.isDesktop ? 75 : 40)}px;
        margin-right: 10px;

        .event-icon {
          max-height: 100%;
          max-width: 100%;
        }
      }

      .event-titles-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;

        .event-title {
          font-size: ${props => (props.isDesktop ? 24 : 18)}px;
          font-family: ${HEADER_FONT};
        }

        .event-subtitle {
          font-family: ${PARAGRAPH_FONT};
          font-size: ${props => (props.isDesktop ? 18 : 12)}px;
        }
      }

      .event-date {
        height: 100%;
        font-family: ${PARAGRAPH_FONT};
        font-size: ${props => (props.isDesktop ? 12 : 10)}px;
        color: ${DARK_GREY_2};
        text-align: right;
      }
    }

    .event-descriptions {
      margin-top: 12px;
      display: flex;
      flex-direction: column;

      .event-description {
        font-family: ${PARAGRAPH_FONT};
        font-size: ${props => (props.isDesktop ? 15 : 12)}px;
        :not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }

    &::before {
      content: '';
      display: block;
      height: 0;
      width: 0;
      border: ${TIMELINE_EVENT_POINTER_RADIUS}px solid transparent;
      position: absolute;
      top: ${EVENT_POINTER_OFFSET_FROM_TOP}px;
      ${eventPointerBeforeStyling};
    }

    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
      border: ${TIMELINE_EVENT_POINTER_RADIUS - 1}px solid transparent;
      position: absolute;
      top: ${EVENT_POINTER_OFFSET_FROM_TOP + 1}px;
      ${eventPointerAfterStyling};
    }
  }
`;

export default Event;
