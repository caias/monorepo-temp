import { CSSProperties } from 'react';
import styled from 'styled-components';

interface TProps {
  className?: string;
  style?: CSSProperties;
}

const Styled = {
  AccordianContent: styled.div<TProps>`
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;
    word-break: keep-all;
    word-wrap: break-word;
  `,
};

export default Styled;
