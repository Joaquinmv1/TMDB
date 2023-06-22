import styled from "styled-components";
// interface StyleProps {
//   active: string | undefined
//   onClick: any
//   disabled: boolean
// }

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 8px;
  font-weight: bold;
  color: #c2c2c2;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<any>`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: ${({ active }) => (active ? "#ddd" : "transparent")};
  cursor: pointer;
`;

export const Button = styled.button`
  color: #fff;
  font-weight: bold;
  border: none;
  background-color: transparent;
  padding: .5rem 1rem;
  font-size: 1.5rem;
`