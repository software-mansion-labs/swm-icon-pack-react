import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.546 4.75c-2.071 0-3.796 1.749-3.796 3.964 0 1.06.406 2.071 1.121 2.813l7.669 7.952a.75.75 0 1 1-1.08 1.042l-7.668-7.953A5.55 5.55 0 0 1 2.25 8.714c0-2.992 2.345-5.464 5.296-5.464 1.413 0 2.763.583 3.754 1.61l.7.726.7-.726a5.22 5.22 0 0 1 3.754-1.61c2.95 0 5.296 2.472 5.296 5.464 0 1.44-.552 2.827-1.541 3.854l-3.835 3.976a.75.75 0 1 1-1.08-1.04l3.835-3.977a4.05 4.05 0 0 0 1.121-2.813c0-2.215-1.725-3.964-3.796-3.964-.997 0-1.96.41-2.674 1.151l-1.24 1.286a.75.75 0 0 1-1.08 0l-1.24-1.286A3.72 3.72 0 0 0 7.546 4.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeart;
