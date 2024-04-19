import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.811 2.278c-.204.05-.396.223-.503.452-.053.115-1.66 4.008-3.571 8.65-3.085 7.496-3.474 8.463-3.471 8.642.006.43.299.714.734.708.198-.002.56-.149 3.579-1.446 1.848-.794 3.387-1.444 3.421-1.444s1.573.65 3.421 1.444c3.047 1.309 3.38 1.444 3.584 1.446.275.004.446-.086.611-.321.098-.14.117-.204.114-.398-.002-.212-.295-.94-3.547-8.829-2.019-4.899-3.582-8.639-3.633-8.694a.8.8 0 0 0-.739-.21m2.994 9.493c1.531 3.723 2.773 6.774 2.759 6.779-.013.006-1.222-.504-2.684-1.134-2.413-1.037-2.68-1.143-2.88-1.143s-.467.106-2.88 1.143c-1.462.63-2.671 1.14-2.684 1.134C6.408 18.539 11.968 5.002 12 5.002c.011 0 1.273 3.046 2.805 6.769"
    />
  </svg>
);
export default SvgNavigation;