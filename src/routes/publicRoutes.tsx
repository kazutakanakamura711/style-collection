import { HomePage } from '@/pages/home';
import { TextBackgroundVideoPage } from '@/pages/textBackgroundVideo';
import { RouteLabelType } from '@/types/routeLabel';

export const publicRoutes = [
  {
    label: RouteLabelType.Home,
    path: '/',
    element: <HomePage />,
  },
  {
    label: RouteLabelType.TextBackgroundVideo,
    path: '/text-background-video',
    element: <TextBackgroundVideoPage />,
  },
];
