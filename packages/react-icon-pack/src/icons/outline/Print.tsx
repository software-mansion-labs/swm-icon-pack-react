import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.701 2.285q-.5.072-.921.495c-.292.291-.445.587-.498.96-.023.158-.041 1.2-.041 2.388L7.24 8.236l-1.73.012c-1.544.011-1.743.019-1.855.081-.155.084-.325.282-.365.424-.039.14-.039 9.354 0 9.494.04.142.21.34.365.424.112.062.311.07 1.852.081l1.728.012.012 1.228c.011 1.069.022 1.244.082 1.353.084.155.282.325.424.365.14.039 8.354.039 8.494 0 .142-.04.34-.21.424-.365.06-.109.071-.284.082-1.353l.012-1.228 1.728-.012c1.541-.011 1.74-.019 1.852-.081.155-.084.325-.282.365-.424.039-.14.039-9.354 0-9.494-.04-.142-.21-.34-.365-.424-.112-.062-.311-.07-1.855-.081l-1.73-.012-.001-2.108c0-1.188-.018-2.23-.041-2.388-.053-.373-.206-.669-.498-.96-.291-.292-.587-.445-.96-.498-.345-.05-6.218-.047-6.559.003m6.466 1.541c.069.063.073.185.073 2.24V8.24H8.76V6.073c0-1.96.006-2.174.066-2.24.063-.07.214-.073 3.167-.073 2.829 0 3.107.006 3.174.066M19.24 13.5v3.74h-2.475l-.012-1.23c-.011-1.071-.022-1.246-.082-1.355-.084-.155-.282-.325-.424-.365-.14-.039-8.354-.039-8.494 0-.142.04-.34.21-.424.365-.06.109-.071.284-.082 1.355l-.012 1.23H4.76V9.76h14.48zm-4 4.5v2.24H8.76v-4.48h6.48z"
    />
  </svg>
);
export default SvgPrint;
