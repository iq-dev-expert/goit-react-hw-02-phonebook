import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  background-color: #e6eaeb;
  border-color: #c5c9c9;
  transition: background-color 250ms linear, border-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #7edffc;
    border-color: #7edffc;
  }
`;
