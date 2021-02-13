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
    component: 'Room',
    title: 'Grupo',
    needsAuth: true,
  },
  {
    path: '/',
    component: 'Room',
    title: 'Grupo',
    needsAuth: true,
  },
];

export default routes;
