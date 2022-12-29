import styled from 'styled-components';

// export const Filter = () => {
//   return;
// };

export const Input = styled.input`
  width: 200px;
  padding: 10px 0 10px 10px;
  border: 1px solid #d3b0f7;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  color: black;
  transition: border-color 250ms linear;
  &:focus {
    border-color: tomato;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 500;
  color: black;
  margin-top: 15px;
`;
