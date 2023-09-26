import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getRandomHexColor from 'utils';

const Section = styled.section`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  min-width: 375px;
  padding-top: 30px;
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: #50565f;
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  display: flex;
  justify-content: space-around;
  background: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: ${getRandomHexColor};
  color: white;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 14px;
  &:first-child {
    border-bottom-left-radius: 6px;
  }
  &:last-child {
    border-bottom-right-radius: 6px;
  }
`;

const Span = styled.span`
  &.label {
    font-size: 12px;
  }
  &.percentage {
    font-size: 16px;
  }
`;

const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <List className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <ListItem className="item" key={id}>
            <Span className="label">{label}</Span>
            <Span className="percentage">{percentage}%</Span>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
