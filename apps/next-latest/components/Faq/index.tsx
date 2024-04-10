'use client';
import { Fragment } from 'react';
import { Accordian } from '@libs/ui';
import Styled from './styled';

const faqs = [
  {
    id: 1,
    question: 'asdasd',
    answer: 'asdasdasd',
  },
  {
    id: 2,
    question: 'asdasd122',
    answer: 'asdasdasdasdasd',
  },
  {
    id: 3,
    question: 'asdasd1',
    answer: 'asdasdasd1111111111111',
  },
];

function Faq() {
  return (
    <Accordian activeOnlyOne>
      {faqs.map(({ question, answer, id }) => (
        <Fragment key={id}>
          <Styled.FaqQustion>{question}</Styled.FaqQustion>
          {answer && <Styled.FaqAnswer>{answer}</Styled.FaqAnswer>}
        </Fragment>
      ))}
    </Accordian>
  );
}

export default Faq;
