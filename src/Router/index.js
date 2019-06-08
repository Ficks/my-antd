import Home from '../Views/Home';
import Login from '../Views/Login/Login';
import Register from '../Views/Register/Register';

export default [
  {
    path: '/',
    exact: true,
    meta: {},
    component: Home,
    children: [
      {
        path: '/user',
        name: 'user',
        exact: true,
        meta: {
          title: '用户管理',
          icon: 'user',
        },
      },
      {
        path: '/wifi',
        name: 'wifi',
        exact: true,
        meta: {
          title: 'wifi模块',
          icon: 'wifi',
        },
      },
    ],
  },
  {
    path: '/Login',
    meta: {},
    component: Login,
  },
  {
    path: '/Register',
    meta: {},
    component: Register,
  },
];
