import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.175 4.105A1.25 1.25 0 0 1 9.36 3.25h5.902c.884 0 1.489.893 1.16 1.714L14.708 9.25h3.085c1.114 0 1.671 1.346.884 2.134l-8.87 8.87c-.897.896-2.404.043-2.097-1.187l1.33-5.317H6.693a1.25 1.25 0 0 1-1.186-1.645zm1.366.645-2.5 7.5H9.36c.813 0 1.41.764 1.212 1.553l-1.188 4.752 7.805-7.805h-2.85a1.25 1.25 0 0 1-1.161-1.714l1.714-4.286z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBolt;
