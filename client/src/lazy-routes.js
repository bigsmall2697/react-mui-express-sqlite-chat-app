import React, { lazy, Fragment, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Layout from './components/layout/layout';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      {routes.map((route, i) => {
        const routeId = `route-${i}`;
        const Layout = route.layout || Fragment;
        const Component = route.component;
        return (
          <Route
            key={routeId}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout isGuest={route.isGuest}>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

export const routes = [
  {
    exact: true,
    layout: Layout,
    isGuest: true,
    path: '/not-found',
    component: lazy(() => import('./views/not-found/not-found')),
  },
  {
    exact: true,
    layout: Layout,
    path: '/test',
    component: lazy(() => import('./views/test/test')),
  },
  {
    exact: true,
    layout: Layout,
    path: '/debug',
    component: lazy(() => import('./views/debug/debug')),
  },
  // {
  //   path: '/products',
  //   layout: Layout,
  //   routes: [
  //     {
  //       exact: true,
  //       path: '/products/add',
  //       component: lazy(() => import('./views/product/get')),
  //     },
  //     {
  //       exact: true,
  //       path: '/products/:id/edit',
  //       component: lazy(() => import('./views/product/get')),
  //     },
  //     {
  //       exact: true,
  //       path: '/products',
  //       component: lazy(() => import('./views/product/list')),
  //     },
  //     {
  //       exact: true,
  //       path: '/products/:id',
  //       component: lazy(() => import('./views/product/get')),
  //     },
  //     {
  //       component: () => <Redirect to="/not-found" />,
  //     },
  //   ],
  // },
  {
    path: '*',
    layout: Layout,
    routes: [
      {
        exact: true,
        path: '/',
        component: () => <Redirect to="/test" />,
      },
      {
        component: () => <Redirect to="/not-found" />,
      },
    ],
  },
];

export default routes;
