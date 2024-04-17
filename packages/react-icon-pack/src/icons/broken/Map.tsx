import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.561 2.392a.75.75 0 0 1 .676-.104l6 2A.75.75 0 0 1 9.75 5v14.96l4.5-1.5V4.04l-2.013.672a.75.75 0 0 1-.474-1.424l3-1a.75.75 0 0 1 .474 0l6 2A.75.75 0 0 1 21.75 5v16a.75.75 0 0 1-1.5 0V5.54l-4.5-1.5v14.42l2.487.828a.75.75 0 0 1-.474 1.424L15 19.79l-5.763 1.92A.75.75 0 0 1 8.25 21V5.54l-4.5-1.5v14.42l2.487.828a.75.75 0 1 1-.474 1.424l-3-1A.75.75 0 0 1 2.25 19V3a.75.75 0 0 1 .311-.608"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMap;
