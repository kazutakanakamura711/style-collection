export const RoutePathType = {
  Home: '/',
  TextShadow3d: '/text-shadow-3d',
  TextBackgroundVideo: '/text-background-video',
} as const;
export type RoutePathType = (typeof RoutePathType)[keyof typeof RoutePathType];

export const parseRoutePathType = (
  value: string,
): RoutePathType | undefined => {
  switch (value) {
    case RoutePathType.Home:
      return RoutePathType.Home;
    case RoutePathType.TextShadow3d:
      return RoutePathType.TextShadow3d;
    case RoutePathType.TextBackgroundVideo:
      return RoutePathType.TextBackgroundVideo;
    default:
      return undefined;
  }
};
