import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWaterdrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.86 2.279c-.172.039-.269.096-.738.432C8.735 4.424 6.782 6.677 5.55 9.14c-.87 1.74-1.276 3.289-1.278 4.88-.002 1.291.214 2.287.734 3.379.803 1.689 2.181 2.981 3.977 3.73 1.019.425 1.892.598 3.017.598s1.998-.173 3.017-.598c1.796-.749 3.177-2.044 3.977-3.73a7.4 7.4 0 0 0 .736-3.159c.009-.48-.011-.562-.185-.754-.136-.15-.308-.219-.545-.219a.71.71 0 0 0-.68.409c-.027.053-.064.352-.083.664-.076 1.3-.479 2.461-1.171 3.38-.343.455-1.047 1.129-1.488 1.424-2.176 1.455-4.964 1.456-7.158 0-.446-.295-1.325-1.162-1.608-1.584a6.4 6.4 0 0 1-.932-2.22c-.108-.505-.151-1.599-.084-2.12.153-1.191.576-2.447 1.246-3.701 1.099-2.058 2.654-3.857 4.627-5.354l.329-.25.329.25c1.748 1.331 3.339 3.102 4.35 4.843.136.236.31.482.385.548.517.454 1.3.018 1.207-.673-.034-.255-.816-1.516-1.465-2.363a19.8 19.8 0 0 0-3.924-3.807c-.589-.424-.754-.495-1.02-.434m-3.055 11a.73.73 0 0 0-.526.544c-.047.209.016.807.123 1.159.238.781.849 1.507 1.594 1.893.433.224.798.326 1.265.353.418.024.556-.009.753-.183.21-.184.289-.604.161-.857-.151-.299-.304-.385-.798-.449-.955-.124-1.554-.75-1.632-1.709-.023-.285-.062-.392-.2-.544-.167-.185-.476-.271-.74-.207"
    />
  </svg>
);
export default SvgWaterdrop;