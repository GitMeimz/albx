const express = require('express');
//引入页面返回控制器
const pagesController = require('./controllers/pagesController.js');
const router = express.Router();

//前端页面
router.get('/index',pagesController.getIndexPage)
      .get('/detail',pagesController.getDetailPage)
      .get('/list',pagesController.getListPage)
//后台管理页面
      .get('/admin',pagesController.getAdminIndexPage)
      .get('/admin/categories',pagesController.getAdminCategoriesPage)
      .get('/admin/comments',pagesController.getAdminCommentsPage)
      .get('/admin/login',pagesController.getAdminLoginPage)
      .get('/admin/nav-menus',pagesController.getAdminNav_MenusPage)
      .get('/admin/password-reset',pagesController.getAdminPassword_resetPage)
      .get('/admin/admin/post-add',pagesController.getAdminPost_addPage)
      .get('/admin/post',pagesController.getAdminPostPage)
      .get('/admin/porfile',pagesController.getAdminPorfilePage)
      .get('/admin/settings',pagesController.getAdminSlidesPage)
      .get('/admin/users',pagesController.getAdminUsersPage)













module.exports = router;