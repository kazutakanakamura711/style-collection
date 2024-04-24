import { HomePage } from '@/pages/home';
import { TextBackgroundVideoPage } from '@/pages/textBackgroundVideo';
import { TextShadow3dPage } from '@/pages/textShadow3d';
import { RouteLabelType } from '@/types/routeLabel';
import { RoutePathType } from '@/types/routePath';

export const publicRoutes = [
  {
    label: RouteLabelType.Home,
    path: RoutePathType.Home,
    element: <HomePage />,
  },
  {
    label: RouteLabelType.TextShadow3d,
    path: RoutePathType.TextShadow3d,
    element: <TextShadow3dPage />,
  },
  {
    label: RouteLabelType.TextBackgroundVideo,
    path: RoutePathType.TextBackgroundVideo,
    element: <TextBackgroundVideoPage />,
  },
];
