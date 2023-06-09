import styled from 'styled-components';

export const Table = styled.table`
  margin: auto;
  padding: 0;

  width: 700px;
  background: beige;
  border: 1px solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const TableTh = styled.th`
  height: 50px;
  font-size: 20px;
  border: 1px solid;
  background-color: #008080;
`;

export const TableTd = styled.td`
  height: 50px;
  font-size: 18px;
  border: 1px solid;
  font-style: italic;
`;
export const Tbody = styled.tbody`

`;
export const TableTr =styled.tr`
&:nth-child(2n) {
  background-color: #C0C0C0;
}
`


