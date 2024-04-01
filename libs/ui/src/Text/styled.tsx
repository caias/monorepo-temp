import styled, { css } from 'styled-components';
import { convertStyle, ellipsis as ellipsisFunc } from '../utils';

import type { TTextProps } from '.'

const text = css<TTextProps>`
  ${(props) => {
    const { nl2br, ellipsis, ...rest } = props;

   return css`
      ${convertStyle({ ...rest })};
      ${nl2br && 'white-space: pre-line'};
      ${ellipsis && ellipsisFunc(typeof ellipsis === 'boolean' ? 1 : ellipsis)};
    `;
  }}
`;

const Styled = {
  Text: styled.div`
    ${text};
  `,
};

export default Styled;