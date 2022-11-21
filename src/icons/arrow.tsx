import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowLeftIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
