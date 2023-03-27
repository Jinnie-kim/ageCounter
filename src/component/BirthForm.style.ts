import styled from '@emotion/styled';

export const BirthFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto 50px;
`;

export const BirthInput = styled.input`
  width: 200px;
  border: 1px solid salmon;
  padding: 10px;
  border-radius: 10px;
  color: salmon;
  &::placeholder {
    color: #f5a69d;
  }
`;

export const BirthButton = styled.button`
  padding: 10px;
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
