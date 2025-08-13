import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('routes/home.tsx'),
    route('yearbook', 'routes/yearbook.tsx'),
    route('admin_dashboard', 'routes/admin_dashboard.tsx'),
] satisfies RouteConfig;
