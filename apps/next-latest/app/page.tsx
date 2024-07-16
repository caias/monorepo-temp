import { Icon } from '@components';

// import { Flex } from '@libs/ui';

import Image from 'next/image';

export default function Home() {
  console.log('asd', process.env.NEXT_PUBLIC_TEST);
  const test = process.env.NEXT_PUBLIC_TEST;
  return (
    <>
      main next latest
      <Icon name="ic-arrow" width="6px" height="10px" />
      <div>{test}</div>
      <Image
        src="/images/img-draw-complete.png"
        width={1024}
        height={768}
        alt="테스트 이미지"
      />
    </>
  );
}
