import home from '../view/pages/home';
import favorite from '../view/pages/favorite';
import Detail from '../view/pages/detail';

const routes = {
  '/': home,
  '/home': home,
  '/favorite': favorite,
  '/detail/:id': Detail,
};

export default routes;
