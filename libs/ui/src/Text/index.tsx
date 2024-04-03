import { PropsWithChildren } from 'react';
import Styled from './styled';

export interface TTextProps {
  /** newline to br */
  nl2br?: boolean;
  /** color */
  color?: string;
  /** ellipsis */
  ellipsis?: boolean;
  /** possible tag */
  as?: 'span' | 'strong' | 'em';
}

function Text(props: PropsWithChildren<TTextProps>) {
  return <Styled.Text {...props}>asd</Styled.Text>;
}

export default Text;
