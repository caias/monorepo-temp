import styled, { css } from 'styled-components';

const div = css<{ container: boolean }>`
  ${({ container }) => container && 'display: flex'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ee5555;
  color: #fff;
`;

const Styled = {
  Div: styled.div<{ container: boolean }>`
    ${div}
  `,
};

export default Styled;
