import styled from 'styled-components';
import { getRandomHexColor } from 'components/getColor/getColor.js';

export const StatisticsSection = styled.section`
  max-width: 350px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 20px;
  border: 1px solid rgb(218, 218, 218, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Title = styled.h2`
  padding-bottom: 15px;
  padding-top: 15px;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  padding: 10px;
  background-color: ${props => {
    return getRandomHexColor;
  }};
`;
export const Label = styled.span`
  font-size: 12px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 600;
`;