export const RouteLabelType = {
  Home: 'Home',
  TextBackgroundVideo: 'TextBackgroundVideo',
} as const;
export type RouteLabelType =
  (typeof RouteLabelType)[keyof typeof RouteLabelType];

export const RouteLabelTypeDisplay = {
  [RouteLabelType.Home]: 'Home',
  [RouteLabelType.TextBackgroundVideo]: 'TextBackgroundVideo',
};

export const parseRouteLabelType = (
  value: string,
): RouteLabelType | undefined => {
  switch (value) {
    case RouteLabelType.Home:
      return RouteLabelType.Home;
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
    case RouteLabelType.TextBackgroundVideo:
      return RouteLabelTypeDisplay[RouteLabelType.TextBackgroundVideo];
    default:
      return undefined;
  }
};
