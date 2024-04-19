import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.614 3.057a3.8 3.8 0 0 0-1.414.575c-.247.158-10.206 10.074-10.407 10.361-.195.28-.263.542-.353 1.37a34 34 0 0 1-.384 2.677l-.183 1.06-.514.521c-.283.286-.533.571-.556.632-.169.444.144.964.612 1.016.314.036.443-.04 1.009-.596l.524-.515 1.007-.178a42 42 0 0 1 2.985-.419c.566-.056.795-.124 1.085-.318.326-.22 10.152-10.066 10.349-10.371.627-.969.803-2.003.528-3.089-.326-1.284-1.367-2.317-2.689-2.668-.402-.107-1.194-.135-1.599-.058M17.74 4.54c.422.089.805.296 1.113.6.469.465.674.952.674 1.6 0 .658-.192 1.113-.694 1.638l-.308.322-.772-.766c-.425-.421-.815-.787-.866-.813-.143-.073-.51-.058-.654.026a.77.77 0 0 0-.383.567c-.035.36.018.441.845 1.277l.762.772-.698.698-.698.699-.721-.714c-.396-.393-.781-.756-.855-.807-.181-.123-.527-.132-.721-.018-.213.125-.37.346-.394.556-.038.339.039.453.87 1.283l.76.759-.709.71-.709.71-.781-.776c-.798-.792-.894-.862-1.192-.863-.126 0-.369.106-.484.212a.88.88 0 0 0-.243.548c0 .265.131.442.894 1.2l.744.739-.709.71-.709.71-.781-.776c-.856-.85-.933-.9-1.299-.845-.244.036-.513.284-.58.533a.86.86 0 0 0 .048.549c.022.044.38.423.796.842l.755.762-.435.428a7 7 0 0 1-.455.428c-.261 0-2.117.239-2.948.379a12 12 0 0 1-.653.101c-.051 0-.046-.077.035-.53.123-.69.239-1.534.332-2.414l.075-.709 5.014-5.008c4.618-4.614 5.035-5.019 5.274-5.135.475-.229.956-.29 1.46-.184"
    />
  </svg>
);
export default SvgThermometer;