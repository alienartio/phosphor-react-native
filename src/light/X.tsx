/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function X(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Line
        x1={200}
        y1={56}
        x2={56}
        y2={200}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Line
        x1={200}
        y1={200}
        x2={56}
        y2={56}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

export default X;