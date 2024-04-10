'use client';

import { useState, PropsWithChildren } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

export default function StyledComponentsRegistry({
  children,
}: PropsWithChildren) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const shouldForwardProp = (propName: string, target: any) => {
    return typeof target === 'string' ? isPropValid(propName) : true;
  };

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={shouldForwardProp}
    >
      {children}
    </StyleSheetManager>
  );
}
