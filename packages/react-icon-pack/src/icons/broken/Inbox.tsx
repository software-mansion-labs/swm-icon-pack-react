import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.693 4.75a.25.25 0 0 0-.234.162L4.082 11.25H8.5a.75.75 0 0 1 .67.415l1.293 2.585H13.6l1.777-2.666A.75.75 0 0 1 16 11.25h2a.75.75 0 0 1 0 1.5h-1.599l-1.777 2.666a.75.75 0 0 1-.624.334h-4a.75.75 0 0 1-.67-.415L8.035 12.75H3.75V18c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 18v-6q0-.137.048-.263l2.756-7.351A1.75 1.75 0 0 1 6.693 3.25h10.614c.73 0 1.382.453 1.639 1.136l2.756 7.35a.8.8 0 0 1 .048.264v6A2.75 2.75 0 0 1 19 20.75h-7a.75.75 0 0 1 0-1.5h7c.69 0 1.25-.56 1.25-1.25v-5.864l-2.709-7.224a.25.25 0 0 0-.234-.162z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInbox;
