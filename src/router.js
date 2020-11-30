import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/Login';
import Dashboard from '@/components/Dashboard';
import Products from '@/views/Products';
import CustomerOrder from '@/views/CustomerOrders';
import CustomerCheckout from '@/views/CustomerCheckout';
import Coupons from '@/views/Coupons';
import OrderList from '@/views/OrderList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      // meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/',
      name: 'CustomerDashboard',
      component: Dashboard,
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
        {
          path: 'order_list',
          name: 'OrderList',
          component: OrderList,
        }
      ],
    },
  ],
});
