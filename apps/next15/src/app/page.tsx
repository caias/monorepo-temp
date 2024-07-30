import { css } from '@styles/css';
import { Flex } from '@styles/jsx';
import '@styles/styles.css';
import styles from './styles';

export default function Home() {
  return (
    <Flex dir="row" className={css({ backgroundColor: '{colors.negative}' })}>
      <Flex dir="column">asd</Flex>
      <p className={styles.textStyle}>jasdklajskldjlakjsdalk asdasd</p>
    </Flex>
  );
}
