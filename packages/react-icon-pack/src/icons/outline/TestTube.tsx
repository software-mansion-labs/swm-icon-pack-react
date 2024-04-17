import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTestTube = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.309 2.47a.75.75 0 0 1 0 1.06l-.53.53 6.893 6.895 2.122 2.121a4.75 4.75 0 1 1-6.718 6.718l-9.015-9.016-.53.53a.75.75 0 1 1-1.061-1.06l1.06-1.06a.75.75 0 0 1 1.061 0l3.595 3.594 7.469-1.723L9.187 4.59a.75.75 0 0 1 0-1.06l1.06-1.061a.75.75 0 0 1 1.062 0m5.597 9.84-7.469 1.723 4.7 4.7a3.25 3.25 0 0 0 4.596-4.596z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTestTube;
