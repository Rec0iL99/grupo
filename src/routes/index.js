/* 
  - Contains all routes
  - Contains need auth or not for each route
*/
const routes = [
  {
    path: '/login',
    component: 'Login',
    title: 'Grupo',
    needsAuth: false,
  },
  {
    path: '/signup',
    component: 'Signup',
    title: 'Grupo',
    needsAuth: false,
  },
  {
    path: '',
    component: 'Chat',
    title: 'Grupo',
    needsAuth: false,
  },
  {
    path: '/',
    component: 'Chat',
    title: 'Grupo',
    needsAuth: false,
  },
];

export default routes;
