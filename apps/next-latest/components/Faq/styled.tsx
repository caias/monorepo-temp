import styled, { css } from 'styled-components';

import { mixin } from '@libs/ui';

const faqQuestion = css<{ active?: boolean }>`
  ${mixin.rowFlexCenter()};
  width: 100%;
  text-align: left;
  position: relative;
  background-color: transparent;
  word-break: break-all;
  padding: 20px 40px 21px 20px;
  .icon {
    ${mixin.posrt('2px', '28px')};
    ${({ active }) => `transform:rotate(${active ? 270 : 90}deg);`}
    transition: transform 0.2s;
  }
  + div {
    border-bottom: 1px solid var(--border-color-primary);
  }
  &:before {
    ${mixin.poslt(0, '21px')};
    content: 'Q.';
    margin-right: 4px;
  }
`;

const faqAnswer = css`
  position: relative;
  color: var(--neutrals-gray-03);
  padding: 0 0 32px 20px;
  white-space: pre-line;
  &:before {
    content: 'A.';
    ${mixin.poslt(0, 0)};
  }
`;

const Styled = {
  FaqQustion: styled.button<{ active?: boolean }>`
    ${faqQuestion}
  `,
  FaqAnswer: styled.div`
    ${faqAnswer}
  `,
};

export default Styled;
