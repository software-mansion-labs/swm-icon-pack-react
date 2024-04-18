import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.701 4.285q-.5.072-.921.495c-.292.291-.445.587-.498.96-.055.379-.055 9.141 0 9.52.053.373.206.669.498.96.291.292.587.445.96.498.167.024 1.533.041 3.39.041l3.11.001v2.476l-1.73.012c-1.52.011-1.745.02-1.85.078a.9.9 0 0 0-.342.354c-.072.14-.064.514.014.665.08.153.277.325.421.365.14.039 8.354.039 8.494 0 .144-.04.341-.212.421-.365.078-.151.086-.525.014-.665a.9.9 0 0 0-.342-.354c-.105-.058-.33-.067-1.85-.078l-1.73-.012V16.76l3.11-.001c1.857 0 3.223-.017 3.39-.041.373-.053.669-.206.96-.498.292-.291.445-.587.498-.96.055-.379.055-9.141 0-9.52-.053-.373-.206-.669-.498-.96-.291-.292-.587-.445-.96-.498-.35-.05-14.214-.048-14.559.003m14.466 1.541c.07.064.073.261.073 4.667 0 4.225-.005 4.607-.066 4.674-.064.07-.339.073-7.167.073-6.551 0-7.106-.005-7.174-.066-.07-.064-.073-.261-.073-4.667 0-4.225.005-4.607.066-4.674.064-.07.339-.073 7.167-.073 6.551 0 7.106.005 7.174.066"
    />
  </svg>
);
export default SvgScreen;
