import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.701 2.285q-.5.072-.921.495c-.292.291-.445.587-.498.96-.023.158-.041 1.2-.041 2.388L7.24 8.236l-1.73.012c-1.544.011-1.743.019-1.855.081-.155.084-.325.282-.365.424-.039.14-.039 9.354 0 9.494.04.142.21.34.365.424.112.062.311.07 1.852.081l1.728.012.012 1.228c.011 1.069.022 1.244.082 1.353.084.155.282.325.424.365.14.039 8.354.039 8.494 0 .142-.04.34-.21.424-.365.06-.109.071-.284.082-1.353l.012-1.228 1.728-.012c1.541-.011 1.74-.019 1.852-.081.155-.084.325-.282.365-.424.039-.14.039-9.354 0-9.494-.04-.142-.21-.34-.365-.424-.116-.064-.531-.07-5.855-.08l-5.73-.01V6.066c0-2.055.004-2.177.073-2.24.067-.06.345-.066 3.174-.066 2.903 0 3.105.004 3.163.07.05.056.065.204.077.73.016.682.033.76.208.954.136.15.308.219.545.219a.72.72 0 0 0 .683-.413c.073-.136.098-1.099.041-1.526a1.6 1.6 0 0 0-.504-1.014c-.291-.292-.587-.445-.96-.498-.345-.05-6.218-.047-6.559.003M19.24 13.5v3.74h-2.475l-.012-1.23c-.011-1.071-.022-1.246-.082-1.355-.084-.155-.282-.325-.424-.365-.14-.039-8.354-.039-8.494 0-.144.04-.341.212-.421.365-.083.16-.084.528-.002.685.07.134.2.263.35.345.082.045.756.057 3.83.066l3.73.011v4.478H8.765l-.012-1.23c-.014-1.326-.018-1.355-.239-1.555-.218-.197-.191-.194-2.024-.207l-1.73-.012V9.76h14.48z"
    />
  </svg>
);
export default SvgPrint;
