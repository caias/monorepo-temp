import {
  ReactElement,
  Fragment,
  cloneElement,
  useState,
  MouseEvent,
  useEffect,
  useRef,
  memo,
} from 'react';

import Styled from './styled';

interface TProps {
  children: ReactElement | ReactElement[];
  initialIndex?: number;
  activeOnlyOne?: boolean;
}

const Accordian = ({ children, initialIndex, activeOnlyOne }: TProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeindex, setActiveIndex] = useState<number[]>(
    initialIndex ? [initialIndex] : [],
  );

  const getContent = (elem: HTMLButtonElement) => {
    return elem.nextElementSibling as HTMLDivElement;
  };

  /**
   * accordian click handler
   */
  const handleClick = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    if (!containerRef.current) {
      return;
    }

    const target = e.currentTarget;
    const targetContent = getContent(target);

    if (!targetContent.childElementCount) {
      return;
    }

    const targetHeight = (targetContent.childNodes[0] as HTMLElement)
      .offsetHeight;
    const isActive = activeindex.includes(index);
    const buttons =
      containerRef.current.querySelectorAll<HTMLButtonElement>(
        '.accordian-trigger',
      );

    if (activeOnlyOne) {
      if (!isActive) {
        targetContent.style.height = `${targetHeight}px`;
      }
      // @ts-ignore
      if (buttons[activeindex[0]]) {
        // @ts-ignore
        getContent(buttons[activeindex[0]]).style.height = '0px';
      }

      setActiveIndex(isActive ? [] : [index]);
      return;
    }

    if (isActive) {
      const removedIndexArr = [...activeindex].filter(item => item !== index);
      setActiveIndex(removedIndexArr);
      targetContent.style.height = '0px';
      return;
    }

    setActiveIndex([...activeindex, index]);
    targetContent.style.height = `${targetHeight}px`;
  };

  /**
   * mount시 열려있어야 되는 경우 initialIndex기반 높이값 세팅
   */
  useEffect(() => {
    if (initialIndex && containerRef.current) {
      const contents =
        containerRef.current.querySelectorAll<HTMLDivElement>(
          '.accordian-content',
        );
      const targetContent = contents[initialIndex];
      // @ts-ignore
      const contentsHeight = targetContent.scrollHeight;
      // @ts-ignore
      targetContent.style.height = `${contentsHeight}px`;
    }
  }, []);

  if (!children || !Array.isArray(children)) {
    return null;
  }

  return (
    <div ref={containerRef}>
      {children.map((child, index) => {
        const childProps = child.props.children;
        const Trigger = childProps[0];
        const Content = childProps[1];
        return (
          <Fragment key={index}>
            {cloneElement(Trigger, {
              onClick: (e: MouseEvent<HTMLButtonElement>) =>
                handleClick(e, index),
              active: activeindex.includes(index),
              className: `accordian-trigger ${Trigger.props.className || ''}`,
            })}
            <Styled.AccordianContent className="accordian-content">
              {Content && cloneElement(Content)}
            </Styled.AccordianContent>
          </Fragment>
        );
      })}
    </div>
  );
};

export default memo(Accordian);
