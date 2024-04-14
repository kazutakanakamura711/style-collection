export const RouteLabelType = {
  Home: 'Home',
  TextShadow3d: 'TextShadow3d',
  TextBackgroundVideo: 'TextBackgroundVideo',
} as const;
export type RouteLabelType =
  (typeof RouteLabelType)[keyof typeof RouteLabelType];

export const RouteLabelTypeDisplay = {
  [RouteLabelType.Home]: 'Home',
  [RouteLabelType.TextShadow3d]: 'TextShadow3d',
  [RouteLabelType.TextBackgroundVideo]: 'TextBackgroundVideo',
};

export const parseRouteLabelType = (
  value: string,
): RouteLabelType | undefined => {
  switch (value) {
    case RouteLabelType.Home:
      return RouteLabelType.Home;
    case RouteLabelType.TextShadow3d:
      return RouteLabelType.TextShadow3d;
    case RouteLabelType.TextBackgroundVideo:
      return RouteLabelType.TextBackgroundVideo;
    default:
      return undefined;
  }
};

export const getRouteLabelTypeDisplay = (value: string) => {
  switch (value) {
    case RouteLabelType.Home:
      return RouteLabelTypeDisplay[RouteLabelType.Home];
    case RouteLabelType.TextShadow3d:
      return RouteLabelTypeDisplay[RouteLabelType.TextShadow3d];
    case RouteLabelType.TextBackgroundVideo:
      return RouteLabelTypeDisplay[RouteLabelType.TextBackgroundVideo];
    default:
      return undefined;
  }
};
