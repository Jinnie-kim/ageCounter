import styled from '@emotion/styled';

export const AgeInfoButton = styled.button`
  width: fit-content;
  padding: 5px;
  border: 1px solid salmon;
  border-radius: 10px;
  background-color: transparent;
  color: salmon;
  &:hover {
    background-color: salmon;
    color: white;
    cursor: pointer;
  }
  &:focus {
    outline: 2px solid #fa7161;
  }
`;
