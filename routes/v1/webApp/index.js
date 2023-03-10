const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const jobDetailsRoute=require('./jobDetails.route');
const jobCategoryRoute=require('./jobCategory.route');
const jobRequestRoute=require('./jobRequest.route');
const config = require('../../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/jobDetails',
    route: jobDetailsRoute,
  },
  {
    path:'/jobCategory',
    route:jobCategoryRoute,
  },
  {
    path:'/jobRequest',
    route: jobRequestRoute,
  }

];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
