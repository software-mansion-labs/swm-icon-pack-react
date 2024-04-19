import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.32 2.281c-1.874.124-3.671.801-5.236 1.971-.493.368-1.464 1.339-1.832 1.832a9.8 9.8 0 0 0-1.895 4.524 11 11 0 0 0 0 2.784 9.8 9.8 0 0 0 1.895 4.524c.368.493 1.339 1.464 1.832 1.832a9.77 9.77 0 0 0 4.524 1.894 10.3 10.3 0 0 0 3.804-.2 9.9 9.9 0 0 0 3.504-1.694c.493-.369 1.463-1.339 1.832-1.832 1.247-1.665 1.944-3.634 1.98-5.596.011-.58-.015-.684-.214-.865-.157-.142-.283-.188-.514-.188a.71.71 0 0 0-.68.41c-.027.053-.064.358-.082.681-.098 1.75-.618 3.211-1.629 4.575l-.262.354-2.794-2.794L12.76 11.7V3.789l.27.027c.775.078 1.715.359 2.55.76.886.426 1.464.838 2.263 1.61.52.503.603.553.903.549.552-.008.885-.661.58-1.137-.134-.209-.821-.881-1.242-1.216a9.8 9.8 0 0 0-6.764-2.101m-.08 5.237v3.719l-2.23.011c-2.371.013-2.303.007-2.524.207-.15.136-.219.308-.219.545s.069.409.219.545c.222.201.136.194 2.756.206l2.461.012 2.792 2.792 2.792 2.792-.354.262a8.255 8.255 0 0 1-9.299.39 8.7 8.7 0 0 1-2.633-2.633c-1.51-2.435-1.659-5.493-.392-8.023.433-.864.868-1.465 1.568-2.166a8 8 0 0 1 2.951-1.912c.619-.231 1.549-.45 1.962-.461l.15-.004z"
    />
  </svg>
);
export default SvgChart;