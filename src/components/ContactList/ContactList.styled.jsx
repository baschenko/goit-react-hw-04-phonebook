import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  font-size: 20px;
  line-height: 1.4;
`;

export const ContactButton = styled.button`
  margin-left: 20px;
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
