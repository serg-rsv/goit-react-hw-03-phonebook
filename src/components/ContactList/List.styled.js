import styled from 'styled-components';

const List = styled.ul`
  width: 360px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    :not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export { List };
