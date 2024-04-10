import { css } from 'styled-components';

const ResetStyle = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  hr,
  b,
  u,
  i,
  center,
  input,
  textarea,
  select,
  button,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  *:not(input, textarea),
  *:focus:not(input, textarea) {
    user-select: none;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    /* overflow: hidden; */
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  #portal {
    position: relative;
    z-index: 5;
  }

  #notification {
    position: relative;
    z-index: 10;
  }

  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    line-height: 1.55;
    -webkit-text-size-adjust: 100%;
    min-height: 100vh;
  }

  address,
  em,
  i {
    font-style: normal;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  img {
    font-size: 0;
    vertical-align: top;
  }

  label {
    display: inline-block;
    position: relative;
  }

  input[type='text'],
  input[type='tel'],
  input[type='password'],
  input[type='search'],
  input[type='email'],
  textarea {
    appearance: none;
  }

  .hidden {
    color: transparent;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: inline-block;
    white-space: nowrap;
  }

  textarea,
  input {
    outline: none;
  }

  button,
  a {
    outline: none;
    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  }

  a {
    text-decoration: none;
  }
  a:active,
  a:hover {
    text-decoration: none;
  }

  input[type='file'],
  input[type='radio'],
  input[type='checkbox'] {
    position: absolute;
    left: -99999px;
    opacity: 0;
  }

  /** 공통 애니메이션 */
  @keyframes toTop {
    0% {
      transform: translateY(100%) translateZ(0);
      opacity: 0;
    }
    100% {
      transform: translateY(0) translateZ(0);
      opacity: 1;
    }
  }
  @keyframes toLeft {
    0% {
      transform: translateX(100%) translateZ(0);
      opacity: 0;
    }
    100% {
      transform: translateX(0) translateZ(0);
      opacity: 1;
    }
  }
  @keyframes pop {
    0% {
      transform: scale(0.7) translateZ(0);
      opacity: 0;
    }
    100% {
      transform: scale(1) translateZ(0);
      opacity: 1;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default ResetStyle;
