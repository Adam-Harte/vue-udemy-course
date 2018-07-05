import Home from './components/Home.vue'
import Header from './components/Header.vue'

const User = resolve => {
   require.esnure(['./components/user/User.vue'], () => {
      resolve(require('./components/user/User.vue'));
   }, 'user');
};

   const UserStart = resolve => {
      require.esnure(['./components/user/UserStart.vue'], () => {
         resolve(require('./components/user/UserStart.vue'));
      }, 'user');
};

const UserEdit = resolve => {
   require.esnure(['./components/user/UserEdit.vue'], () => {
      resolve(require('./components/user/UserEdit.vue'));
   }, 'user');
};

   const UserDetail = resolve => {
      require.esnure(['./components/user/UserDetail.vue'], () => {
         resolve(require('./components/user/UserDetail.vue'));
      }, 'user');
};

export const routes = [
   { path: '/', name: 'home', compoents: {
      default: Home,
      'header-top': Header
   } },
   { path: '/user', components: {
         default: User,
         'header-bottom': Header
      },
      children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
         console.log('inside route setup');
         next();
      } },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
   ] },
   { path: '/redirect-me', redirect: { name: 'home' } },
   { path: '*', redirect: '/' }
]