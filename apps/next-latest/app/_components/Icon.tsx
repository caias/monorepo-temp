import type { IconName } from '../../types/name';
import type { SVGProps } from 'react';
function Icon({
  name,
  width = '24px',
  height,
  ...rest
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  childClassName?: string;
}) {
  return (
    <svg {...rest} width={width} height={height || width}>
      <use href={`/icons/svg-sprite.svg#${name}`} />
    </svg>
  );
}

export default Icon;
