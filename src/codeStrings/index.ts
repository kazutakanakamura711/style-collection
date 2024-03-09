import { RouteLabelType } from '../types/routeLabel';
import { homeCode } from './homeCode';
import { textBackgroundVideoCode } from './textBackgroundVideoCode';

export * from './homeCode';
export * from './textBackgroundVideoCode';

export const codeStringMap = {
  [RouteLabelType.Home]: homeCode,
  [RouteLabelType.TextBackgroundVideo]: textBackgroundVideoCode,
};
