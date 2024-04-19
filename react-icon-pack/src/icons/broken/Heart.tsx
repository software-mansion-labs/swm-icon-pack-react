import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.12 3.281C5.023 3.459 3.268 4.852 2.558 6.9c-.391 1.129-.388 2.521.01 3.66a6.5 6.5 0 0 0 .765 1.452c.257.346.369.465 4.737 4.993 1.897 1.968 3.507 3.611 3.577 3.653q.128.075.358.075a.71.71 0 0 0 .637-.356c.121-.197.127-.552.011-.735-.044-.07-1.627-1.731-3.517-3.69-1.89-1.96-3.664-3.804-3.944-4.096-.702-.738-.893-1.007-1.13-1.596-.238-.59-.282-.845-.279-1.6.003-.62.013-.712.112-1.04.413-1.369 1.344-2.325 2.654-2.728.318-.097.412-.108.991-.109.7-.002.874.031 1.465.278.509.213.852.485 1.714 1.364.441.449.859.852.931.895.177.108.523.108.7 0 .072-.043.49-.446.931-.895.862-.879 1.205-1.151 1.714-1.364.591-.247.765-.28 1.465-.278.579.001.673.012.991.109 1.315.404 2.233 1.351 2.656 2.737.097.319.107.413.11 1.031.003.755-.041 1.01-.279 1.6-.229.571-.449.888-1.038 1.5l-2.034 2.11c-1.765 1.829-1.818 1.896-1.771 2.241a.752.752 0 0 0 1.038.594c.082-.034.742-.686 1.75-1.73 2.866-2.965 2.809-2.9 3.196-3.625 1.115-2.087.79-4.682-.802-6.404-1.019-1.102-2.335-1.675-3.837-1.672-1.009.002-1.806.225-2.7.758-.364.217-.549.373-1.17.985l-.57.562-.57-.562c-.749-.739-.981-.914-1.65-1.248-.76-.378-1.771-.564-2.66-.488"
    />
  </svg>
);
export default SvgHeart;