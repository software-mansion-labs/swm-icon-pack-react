import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.763 2.288a.75.75 0 0 1 .474 0l4.633 1.545a2.75 2.75 0 0 1 1.88 2.609v11.783a2.75 2.75 0 0 1-3.62 2.609L15 19.791l-5.763 1.92a.75.75 0 0 1-.474 0L4.13 20.168a2.75 2.75 0 0 1-1.88-2.609V5.775a2.75 2.75 0 0 1 3.62-2.609L9 4.209zM8.25 5.541l-2.855-.952A1.25 1.25 0 0 0 3.75 5.775v11.783c0 .538.344 1.016.855 1.186L8.25 19.96zm1.5 14.418 4.5-1.5V4.041l-4.5 1.5zm6-15.918v14.418l2.855.952a1.25 1.25 0 0 0 1.645-1.186V6.442a1.25 1.25 0 0 0-.855-1.186z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMap;
