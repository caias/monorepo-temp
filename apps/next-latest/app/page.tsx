import { Icon } from '@components';

export default function Home() {
  console.log('asd', process.env.NEXT_PUBLIC_TEST);
  return (
    <>
      main
      <Icon name="ic-arrow" width="6px" height="10px" />
    </>
  );
}
