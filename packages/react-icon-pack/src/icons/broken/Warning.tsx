import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.805 4.279c-.291.071-.506.328-.544.653-.014.114-.02 2.701-.013 5.748.01 4.609.021 5.557.067 5.64a.9.9 0 0 0 .345.35c.157.082.525.081.685-.002.153-.08.325-.277.365-.421.039-.14.039-11.354 0-11.494a.83.83 0 0 0-.345-.41.95.95 0 0 0-.56-.064m-.085 14.025q-.452.196-.453.696c-.001.446.287.733.733.733a.71.71 0 0 0 .682-.413c.071-.137.064-.514-.012-.66-.182-.348-.603-.507-.95-.356"
    />
  </svg>
);
export default SvgWarning;
