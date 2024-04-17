import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.561 2.392a.75.75 0 0 1 .676-.104L9 4.21l5.763-1.92a.75.75 0 0 1 .474 0l6 2A.75.75 0 0 1 21.75 5v16a.75.75 0 0 1-.987.712L15 19.79l-5.763 1.92a.75.75 0 0 1-.474 0l-6-2A.75.75 0 0 1 2.25 19V3a.75.75 0 0 1 .311-.608M15.75 18.459l4.5 1.5V5.541l-4.5-1.5zm-1.5-14.418v14.418l-4.5 1.5V5.541zm-6 1.5-4.5-1.5v14.418l4.5 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMap;
