import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function DownloadIcon(props: SvgProps) {
  return (
    <Svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </Svg>
  );
}

export default DownloadIcon;
