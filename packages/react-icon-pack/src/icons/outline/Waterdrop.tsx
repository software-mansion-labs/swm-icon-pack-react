import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWaterdrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.579 2.38a.75.75 0 0 1 .842 0c4.56 3.096 7.329 7.885 7.329 11.62 0 4.9-3.99 7.75-7.75 7.75S4.25 18.9 4.25 14c0-3.735 2.769-8.524 7.329-11.62M12 3.916C7.988 6.814 5.75 11.002 5.75 14c0 3.936 3.174 6.25 6.25 6.25s6.25-2.314 6.25-6.25c0-2.998-2.238-7.186-6.25-10.084M9 13.25a.75.75 0 0 1 .75.75c0 .966.784 1.75 1.75 1.75a.75.75 0 0 1 0 1.5A3.25 3.25 0 0 1 8.25 14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWaterdrop;
