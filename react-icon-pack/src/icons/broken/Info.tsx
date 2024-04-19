import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.9 4.259a1 1 0 0 1-.147.037c-.139.031-.339.201-.421.359-.083.16-.084.528-.002.685.124.239.414.42.67.42s.546-.181.67-.42c.076-.146.083-.523.012-.66a.85.85 0 0 0-.322-.339c-.106-.055-.393-.106-.46-.082m-.095 3.02c-.291.071-.506.328-.544.653-.014.114-.02 2.701-.013 5.748.01 4.609.021 5.557.067 5.64a.9.9 0 0 0 .345.35c.157.082.525.081.685-.002.153-.08.325-.277.365-.421.039-.14.039-11.354 0-11.494a.83.83 0 0 0-.345-.41.95.95 0 0 0-.56-.064"
    />
  </svg>
);
export default SvgInfo;
