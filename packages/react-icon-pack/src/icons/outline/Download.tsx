import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v10.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V3a.75.75 0 0 1 .75-.75m-8 12a.75.75 0 0 1 .75.75v3c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-3a.75.75 0 0 1 1.5 0v3A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18v-3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownload;
