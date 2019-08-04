//这个模块主要用于返回用户所有请求的页面

//前端页面请求地址
exports.getIndexPage = (req,res)=>{
    res.render('index.ejs')
}
exports.getDetailPage = (req,res)=>{
    res.render('detail.ejs')
}
exports.getListPage = (req,res)=>{
    res.render('list.ejs')
}
//-----------------------------------------------------
//后台管理页面请求地址
exports.getAdminIndexPage = (req,res)=>{
    res.render('admin/index.ejs')
}
exports.getAdminCategoriesPage = (req,res)=>{
    res.render('admin/categories.ejs')
}
exports.getAdminCommentsPage = (req,res)=>{
    res.render('admin/comments.ejs')
}
exports.getAdminLoginPage = (req,res)=>{
    res.render('admin/login.ejs')
}
exports.getAdminNav_MenusPage = (req,res)=>{
    res.render('admin/nav-menus.ejs')
}
exports.getAdminPassword_resetPage = (req,res)=>{
    res.render('admin/password-reset.ejs')
}
exports.getAdminPost_addPage = (req,res)=>{
    res.render('admin/post-add.ejs')
}
exports.getAdminPostPage = (req,res)=>{
    res.render('admin/post.ejs')
}
exports.getAdminPorfilePage = (req,res)=>{
    res.render('admin/porfile.ejs')
}
exports.getAdminSettingsPage = (req,res)=>{
    res.render('admin/settings.ejs')
}
exports.getAdminSlidesPage = (req,res)=>{
    res.render('admin/slides.ejs')
}
exports.getAdminUsersPage = (req,res)=>{
    res.render('admin/users.ejs')
}


