import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.25 6A2.75 2.75 0 0 1 8 3.25h8A2.75 2.75 0 0 1 18.75 6v15a.75.75 0 0 1-1.28.53L12 16.06l-5.47 5.47A.75.75 0 0 1 5.25 21zM8 4.75c-.69 0-1.25.56-1.25 1.25v13.19l4.72-4.72a.75.75 0 0 1 1.06 0l4.72 4.72V6c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookmark;
