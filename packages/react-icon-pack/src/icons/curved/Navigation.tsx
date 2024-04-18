import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.785 2.288c-.241.066-.412.277-.853 1.054-1.849 3.254-3.807 7.34-5.013 10.461-.713 1.846-1.532 4.348-1.636 4.998-.177 1.109.795 2.078 1.923 1.918.226-.032.819-.25 2.672-.984 1.31-.519 2.548-1.007 2.752-1.084l.37-.142.37.142c.203.077 1.442.565 2.752 1.084 1.853.734 2.446.952 2.672.984a1.703 1.703 0 0 0 1.924-1.404c.055-.348.009-.606-.283-1.575-.861-2.853-1.898-5.483-3.493-8.86-.958-2.027-2.805-5.527-3.308-6.266-.201-.296-.517-.418-.849-.326m.482 2.682c1.606 2.926 3.319 6.55 4.353 9.21.655 1.685 1.62 4.59 1.62 4.877 0 .116-.073.183-.198.183-.056 0-1.38-.508-2.942-1.128-2.693-1.07-2.853-1.128-3.1-1.129-.247 0-.403.057-3.1 1.129-1.562.62-2.886 1.128-2.942 1.128-.125 0-.198-.067-.198-.183 0-.176.604-2.101 1.061-3.377.774-2.168 1.642-4.199 2.939-6.88.725-1.5 2.18-4.278 2.24-4.279.011 0 .131.202.267.449"
    />
  </svg>
);
export default SvgNavigation;
