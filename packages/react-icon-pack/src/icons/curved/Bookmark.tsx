import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.092 4.315C8.276 3.548 9.955 3.25 12 3.25s3.724.298 4.908 1.065c1.25.81 1.842 2.07 1.842 3.685v11.086c0 1.559-1.885 2.34-2.987 1.237l-3.586-3.586a.25.25 0 0 0-.354 0l-3.586 3.586c-1.102 1.103-2.987.322-2.987-1.237V8c0-1.615.592-2.875 1.842-3.685m.816 1.259C7.158 6.06 6.75 6.8 6.75 8v11.086c0 .223.27.334.427.177l3.586-3.586a1.75 1.75 0 0 1 2.474 0l3.586 3.586a.25.25 0 0 0 .427-.177V8c0-1.2-.408-1.94-1.158-2.426-.816-.529-2.137-.824-4.092-.824s-3.276.295-4.092.824"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookmark;
