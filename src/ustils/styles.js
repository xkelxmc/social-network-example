import {isAndroid} from './global';

export const shadows = (color, width, height, radius, opacity) =>
  isAndroid
    ? {
        shadowColor: color,
        elevation: radius,
      }
    : {
        shadowColor: color,
        shadowOffset: {
          width,
          height,
        },
        shadowOpacity: opacity,
        shadowRadius: radius,
      };
