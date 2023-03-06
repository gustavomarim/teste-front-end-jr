import React from 'react';

export interface FlexProps {
  direction?: 'row' | 'column';
  gap?: number;
  padding?: string;
  wrap?: 'wrap' | 'nowrap';
  children?: React.ReactNode;
}

export const Flex = (props: FlexProps) => {
  const style = {
    display: 'flex',
    flexDirection: props.direction,
    gap: `${props.gap}px`,
    flexWrap: props.wrap,
    padding: props.padding,
  };

  return <div style={style}>{props.children}</div>;
};
