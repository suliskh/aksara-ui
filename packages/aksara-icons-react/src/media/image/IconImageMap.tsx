import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconImageMap: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.0426 5.00482H9.03284C8.75641 5.0035 8.48278 5.06018 8.22962 5.1712C7.97646 5.28222 7.7494 5.4451 7.56311 5.64933L3 10.4213V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11.0217C21 11.0384 20.9977 11.0546 20.9954 11.0708C20.9935 11.0841 20.9916 11.0975 20.991 11.1112L18.36 8.48334C18.1756 8.29364 17.9536 8.1446 17.7083 8.0458C17.4629 7.94699 17.1996 7.9006 16.9352 7.90961C16.6711 7.91186 16.4102 7.96669 16.1676 8.0709C15.9249 8.1751 15.7055 8.3266 15.5221 8.51654L14.1842 9.89349L10.5416 5.69182C10.3548 5.47744 10.1246 5.30529 9.86611 5.18683C9.60765 5.06837 9.32691 5.00633 9.0426 5.00482ZM15.5556 4.71412C15.3911 4.60424 15.1978 4.54559 15 4.54559C14.7348 4.54559 14.4804 4.65095 14.2929 4.83848C14.1054 5.02602 14 5.28037 14 5.54559C14 5.74337 14.0586 5.93671 14.1685 6.10116C14.2784 6.26561 14.4346 6.39378 14.6173 6.46947C14.8 6.54516 15.0011 6.56496 15.1951 6.52638C15.3891 6.48779 15.5673 6.39255 15.7071 6.2527C15.847 6.11284 15.9422 5.93466 15.9808 5.74068C16.0194 5.5467 15.9996 5.34563 15.9239 5.16291C15.8482 4.98018 15.72 4.824 15.5556 4.71412ZM14.8977 11.7633C15.1706 11.6593 15.4174 11.4967 15.6208 11.2871L16.9518 9.90376L19.8675 12.8162C19.5977 12.9498 19.301 13.02 19 13.0217H5.00003C4.53414 13.0199 4.08376 12.8541 3.72803 12.5532L9.03287 7.00484L12.5641 11.0668C12.7353 11.3035 12.9563 11.4997 13.2114 11.6418C13.4666 11.784 13.7498 11.8685 14.0411 11.8895C14.3324 11.9104 14.6248 11.8674 14.8977 11.7633ZM9 15H5C3.89543 15 3 15.8954 3 17V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V17C11 15.8954 10.1046 15 9 15ZM15 15H19C20.1046 15 21 15.8954 21 17V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V17C13 15.8954 13.8954 15 15 15Z"
      fill={fill}
    />
  </svg>
);

IconImageMap.defaultProps = {
  ...iconDefaultProps,
};

export default IconImageMap;
