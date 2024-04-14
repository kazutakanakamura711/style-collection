import { HomePage } from '@/pages/home';
import { TextBackgroundVideoPage } from '@/pages/textBackgroundVideo';
import { TextShadow3dPage } from '@/pages/textShadow3d';
import { RouteLabelType } from '@/types/routeLabel';

export const publicRoutes = [
  {
    label: RouteLabelType.Home,
    path: '/',
    element: <HomePage />,
  },
  {
    label: RouteLabelType.TextShadow3d,
    path: '/text-shadow-3d',
    element: <TextShadow3dPage />,
  },
  {
    label: RouteLabelType.TextBackgroundVideo,
    path: '/text-background-video',
    element: <TextBackgroundVideoPage />,
  },
];
