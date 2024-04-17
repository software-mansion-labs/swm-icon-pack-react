import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWaterdrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.628 4.392a1.01 1.01 0 0 0-1.256 0C7.745 7.268 5.75 11.169 5.75 14c0 3.936 3.174 6.25 6.25 6.25s6.25-2.314 6.25-6.25c0-2.83-1.995-6.732-5.622-9.608M10.44 3.216a2.51 2.51 0 0 1 3.122 0C17.428 6.284 19.75 10.58 19.75 14c0 4.9-3.99 7.75-7.75 7.75S4.25 18.9 4.25 14c0-3.42 2.322-7.716 6.19-10.784M9 13.25a.75.75 0 0 1 .75.75c0 .966.784 1.75 1.75 1.75a.75.75 0 0 1 0 1.5A3.25 3.25 0 0 1 8.25 14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWaterdrop;
