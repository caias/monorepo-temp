import { CSSProperties, memo } from 'react';

import fileNames from '../../assets/icons';

export type TIconName =
  | 'ic-header-back'
  | 'ic-header-close'
  | 'ic-check'
  | 'ic-select'
  | 'ic-arrow'
  | 'ic-share'
  | 'ic-logo'
  | 'ic-home'
  | 'ic-mission-write-title'
  | 'ic-mission-simple'
  | 'ic-mission-comment'
  | 'ic-mission-sns-share'
  | 'ic-mission-poll'
  | 'ic-mission-invitation'
  | 'ic-mission-image-upload'
  | 'ic-mission-text'
  | 'ic-mission-list-done'
  | 'ic-mission-follow'
  | 'ic-sample-image'
  | 'ic-info-text'
  | 'ic-inquiry-add'
  | 'ic-inquiry-reply'
  | 'ic-poll-result'
  | 'ic-poll-selected'
  | 'ic-talk-report'
  | 'ic-thumbup'
  | 'ic-thumbup-selected'
  | 'ic-dialog-warning'
  | 'ic-thumb-play'
  | 'ic-bookmark'
  | 'ic-kebab'
  | 'ic-talk-owner'
  | 'btn-floating-write'
  | 'btn-input-delete'
  | 'btn-thumb-delete'
  | 'ic-pass-s'
  | 'ic-pass-empty'
  | 'ic-pass-deadline'
  | 'ic-pass-done'
  | 'ic-close-s'
  | 'ic-rank-trophy'
  | 'ic-rank-topranking'
  | 'ic-rank-congrats'
  | 'ic-rank-deadline';

type TProps = {
  /** Icon svg id */
  name: TIconName;
  /** Icon color  */
  color?: string;
  /** Icon line color (path나 g로 그리지 않는 경우지만 쓸일이 없을거 같은..)  */
  stroke?: string;
  /** Icon 가로값 */
  width?: string;
  /** Icon 세로값 */
  height?: string;
  /** style sheet */
  style?: CSSProperties;
  /** className */
  className?: string;
};

export type TIconProps = Partial<TProps>;

const defaultProps = {
  width: '24px',
};

function Icon({ name, width, height, style, className, ...rest }: TIconProps) {
  if (name && fileNames.includes(name)) {
    return (
      <svg
        className={`icon ${className ? className : ''}`}
        width={width}
        height={height || width}
        style={{ ...style, ...rest }}
      >
        <use href={`#${name}`} />
      </svg>
    );
  }

  return null;
}

Icon.defaultProps = defaultProps;

export default memo(Icon);
