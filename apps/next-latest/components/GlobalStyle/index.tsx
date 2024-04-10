'use client';

import { createGlobalStyle, css } from 'styled-components';

import { ResetStyle } from '@libs/ui';

const globalStyle = css`
  :root {
    --colors-red: #ff3244;
    --colors-orange: #ff813a;
    --colors-yellow: #ffd743;
    --colors-green: #5be192;
    --colors-blue: #09f;
    --colors-indigo: #482ee9;
    --colors-purple: #9f85ff;
    --colors-pink: #ff9aef;
    --neutrals-black: #000;
    --neutrals-gray-01: #333;
    --neutrals-gray-02: #666;
    --neutrals-gray-03: #999;
    --neutrals-gray-04: #b8b8b8;
    --neutrals-gray-05: #e5e5ea;
    --neutrals-gray-06: #f2f2f6;
    --neutrals-gray-07: #f8f8f8;
    --neutrals-white: #fff;
    --disabled-color: var(--neutrals-gray-06);
    --disabled-text-color: var(--neutrals-gray-04);
    --red-rgb: 255, 64, 44;
    --black-rgb: 0, 0, 0;
    --white-rgb: 255, 255, 255;
    --gray-rgb: 102, 102, 102;
    --indigo-rgb: 2, 46, 233;
    --orange-rgb: 255, 129, 58;
    --border-color-primary: var(--neutrals-gray-06);
    --border-color-secondary: var(--neutrals-gray-05);
    --border-radius-small: 8px;
    --border-radius-medium: 12px;
    --border-radius-large: 16px;
    --bottom-space: 48px;
    --headerShadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    --dialog-shadow-rgb: var(--gray-rgb);
  }
  body {
    overflow: hidden;
    background-color: var(--neutrals-white);
  }
  body,
  input,
  select,
  textarea,
  table,
  button,
  pre {
    font-size: 16px;
    font-weight: normal;
    line-height: 26px;
    letter-spacing: -0.5px;
    color: var(--neutrals-gray-01);
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
  }

  strong {
    font-weight: normal;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: var(--theme-default-color);
  }

  a {
    color: var(--gray01);
  }

  input[type='text'],
  input[type='tel'],
  input[type='password'],
  input[type='search'],
  input[type='email'],
  textarea {
    background-color: var(--neutrals-white);
  }

  .caption {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0;
  }
  .caption1_2 {
    font-size: 12px;
    line-height: 18px;
    font-family: LIFEPLUS, sans-serif;
    letter-spacing: 0;
  }
  .body1 {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.3px;
  }
  .body2_1 {
    font-size: 16px;
    line-height: 26px;
  }
  .body2_2 {
    font-size: 17px;
    line-height: 32px;
  }
  .body2_3 {
    font-size: 16px;
    line-height: 26px;
    font-family: LIFEPLUS, sans-serif;
  }
  .body3 {
    font-size: 18px;
    line-height: 28px;
  }
  .title1 {
    font-size: 20px;
    line-height: 32px;
    font-family: LIFEPLUS, sans-serif;
  }
  .title2_1 {
    font-size: 22px;
    line-height: 36px;
    font-family: LIFEPLUS, sans-serif;
  }
  .title2_2 {
    font-size: 22px;
    line-height: 36px;
  }
  .title3_1 {
    font-size: 24px;
    line-height: 38px;
    font-family: LIFEPLUS, sans-serif;
  }
  .title3_2 {
    font-size: 24px;
    line-height: 38px;
  }
  .title4 {
    font-size: 28px;
    line-height: 46px;
    font-family: LIFEPLUS, sans-serif;
  }

  .weight_L {
    font-weight: 300;
  }
  .weight_R {
    font-weight: normal;
  }
  .weight_M {
    font-weight: 500;
  }
  .weight_EB {
    font-weight: 600;
  }
  .weight_B {
    font-weight: 700;
  }

  svg {
    fill: currentColor;
  }

  .shadow {
    box-shadow: var(--headerShadow);
  }

  .icon {
    flex-shrink: 0;
  }

  .image {
    width: 100%;
    max-width: 100%;
  }

  .underline {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  ${globalStyle}
`;

export default GlobalStyle;
