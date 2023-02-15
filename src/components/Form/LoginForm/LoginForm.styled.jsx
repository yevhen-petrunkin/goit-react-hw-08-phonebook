import styled from '@emotion/styled';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 55vh;
  padding: 20px;
  display: block;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    margin-bottom: 50vh;
  }
  @media (min-width: 900px) {
    margin-bottom: 50vh;
  }
`;
