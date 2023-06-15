import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Employee } from '../features/Employee/Employee';
import { Login } from '../features/Login';
import { NotFoundPage } from '../features/NotFoundPage';
import { WebView } from '../features/Webview';
import { Page } from './types';


export const pages: Page[] = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '/link',
    exact: true,
    component: Employee,
  },
  {
    path: '/webview',
    exact: true,
    component: WebView,
  },
  {
    path: '/webview?path=:path',
    exact: true,
    component: WebView,
  },
  {
    path: '/404',
    exact: true,
    component: NotFoundPage,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return <Route key={path} component={component} exact={exact} path={path} />;
        })}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
