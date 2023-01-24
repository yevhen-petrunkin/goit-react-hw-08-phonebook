import styled from 'styled-components';

export const UserBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const Btn = styled.button`
  margin-top: auto;
  margin-bottom: auto;
  padding: 5px 10px;
  height: 100%;
  box-sizing: border-box;
  font-size: 12px;
  background-color: rgb(239 239 239);
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 1px 1px 5px grey;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: grey;
    box-shadow: 1px 1px 2px grey;
  }
`;
