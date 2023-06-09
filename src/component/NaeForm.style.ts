import styled from '@emotion/styled';

export const NameFormStyle = styled.form`
  margin-bottom: 20px;
`;

export const NameInput = styled.input`
  width: 150px;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid salmon;
  border-radius: 10px;
  color: salmon;
  &::placeholder {
    color: #f5a69d;
  }
`;

export const NameButton = styled.button`
  width: 90px;
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
