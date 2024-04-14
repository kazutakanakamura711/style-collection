import { RouteLabelType } from '../types/routeLabel';
import { homeCode } from './homeCode';
import { textShadow3d } from './textShadow3d';
import { textBackgroundVideoCode } from './textBackgroundVideoCode';

export * from './homeCode';
export * from './textBackgroundVideoCode';

export const codeStringMap = {
  [RouteLabelType.Home]: homeCode,
  [RouteLabelType.TextShadow3d]: textShadow3d,
  [RouteLabelType.TextBackgroundVideo]: textBackgroundVideoCode,
};
