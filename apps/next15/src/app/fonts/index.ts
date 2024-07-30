import localFont from 'next/font/local';

const boldFont = localFont({
  src: [
    {
      path: './LIFEPLUS_Bold.woff2',
      weight: '700',
    },
    {
      path: './LIFEPLUS_Bold.woff',
      weight: '700',
    },
  ],
  variable: '--font-bold',
});
const mediumFont = localFont({
  src: [
    {
      path: './LIFEPLUS_Medium.woff2',
      weight: '500',
    },
    {
      path: './LIFEPLUS_Medium.woff',
      weight: '500',
    },
  ],
  variable: '--font-medium',
});
const lightFont = localFont({
  src: [
    {
      path: './LIFEPLUS_Light.woff2',
      weight: '300',
    },
    {
      path: './LIFEPLUS_Light.woff',
      weight: '300',
    },
  ],
  variable: '--font-light',
});

const FONT = {
  bold: boldFont,
  medium: mediumFont,
  light: lightFont,
};

export default FONT;
