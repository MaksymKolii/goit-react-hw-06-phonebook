import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 6px 0;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Span = styled.span`
  margin-left: 2px;
  font-weight: 600;
`;
export const P = styled.p`
  margin: 0 6px;
  font-weight: 500;
`;

export const Button = styled.button`
  min-width: 80px;
  padding: 5px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  background-color: #e9e9e9;
  color: #3a383d;
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #188ce8;
    color: white;
  }
`;
