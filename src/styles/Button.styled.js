import styled from 'styled-components';

const Button = styled.button`
  width: min-content;
  white-space: nowrap;

  cursor: pointer;

  padding: 8px;

  border-radius: 4px;
  border: none;
  outline: none;

  text-transform: capitalize;
  font-size: 16px;
  line-height: 1;

  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, gray 0 -3px 0 inset;

  transition: box-shadow 0.15s, transform 0.15s;

  :active {
    box-shadow: gray 0 3px 7px inset;
    transform: translateY(2px);
  }

  :not(:last-child) {
    margin-right: 8px;
  }
`;

export { Button };
