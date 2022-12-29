import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 30px auto 0 auto;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  font-size: 22px;
  font-weight: 500;
  color: black;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

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

export const Button = styled.button`
  min-width: 150px;
  padding: 10px;
  margin-top: 25px;
  font-size: 16px;
  font-weight: 600;
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
