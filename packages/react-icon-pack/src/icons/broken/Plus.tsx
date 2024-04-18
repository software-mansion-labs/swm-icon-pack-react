import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.805 3.279c-.292.071-.506.328-.544.653-.014.114-.019 3.826-.013 8.248.013 8.624 0 8.105.207 8.334.136.15.308.219.545.219s.409-.069.545-.219c.204-.225.194-.039.206-4.023l.011-3.729 3.729-.011c3.382-.01 3.74-.017 3.849-.077a.71.71 0 0 0 .393-.674c0-.237-.07-.409-.219-.545-.225-.204-.039-.194-4.023-.206l-3.729-.011-.011-3.729c-.012-3.984-.002-3.798-.206-4.023-.167-.185-.476-.271-.74-.207m-8 8c-.382.092-.618.496-.526.898.071.31.317.522.653.563.114.014 1.351.019 2.748.012 2.765-.013 2.653-.004 2.865-.238.142-.157.188-.283.188-.514a.71.71 0 0 0-.393-.674c-.108-.059-.386-.067-2.76-.073-1.452-.003-2.701.008-2.775.026"
    />
  </svg>
);
export default SvgPlus;
