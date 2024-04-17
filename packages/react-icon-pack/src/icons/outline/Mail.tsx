import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.763 4.763A1.75 1.75 0 0 1 4 4.25h16A1.747 1.747 0 0 1 21.75 6v12A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18V6c0-.483.197-.922.513-1.237m2.048.987 6.305 6.305-.495.495.495-.495a1.25 1.25 0 0 0 1.768 0l.53.53-.53-.53 6.305-6.305zM20.25 6.81l-6.305 6.306a2.75 2.75 0 0 1-3.89 0l.53-.53-.53.53L3.75 6.811V18c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMail;
