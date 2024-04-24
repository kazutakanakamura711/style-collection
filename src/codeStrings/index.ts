import { homeCode } from './homeCode';
import { textShadow3d } from './textShadow3d';
import { textBackgroundVideoCode } from './textBackgroundVideoCode';
import { RoutePathType } from '@/types/routePath';

export * from './homeCode';
export * from './textBackgroundVideoCode';

export const codeStringMap = {
  [RoutePathType.Home]: homeCode,
  [RoutePathType.TextShadow3d]: textShadow3d,
  [RoutePathType.TextBackgroundVideo]: textBackgroundVideoCode,
};
