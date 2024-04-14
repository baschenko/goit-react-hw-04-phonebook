import styled from '@emotion/styled';

export const FormContainer = styled.form`
  border-radius: 5px;
  border: 1px solid grey;
  padding: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-weight: 600;
`;

export const FormInput = styled.input`
  margin: 20px 0 30px 0;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  text-transform: capitalize;
  font-weight: 600;
  &:hover {
    background-color: #14b8f4;
  }

  &:active {
    box-shadow: none;
  }
`;
