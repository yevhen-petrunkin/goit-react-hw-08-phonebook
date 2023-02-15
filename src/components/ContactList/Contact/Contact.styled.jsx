import styled from '@emotion/styled';

export const ContactItem = styled.li`
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
  @media (min-width: 900px) {
    justify-content: flex-end;
  }
`;

export const ContactLink = styled.a`
  padding: 10px 0;
  text-decoration: none;
`;
