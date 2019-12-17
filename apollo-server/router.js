const express = require('express');
let router = express.Router();
const controller = require('./controller');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log(req.url);
    next()
})

router.get('/project', controller.project.info);
router.get('/block/list', controller.block.list);
router.get('/block/download', controller.block.download);
router.get('/dependence', controller.dependence.dependencies);
router.post('/dependence/install', controller.dependence.install);
// 创建模块
router.get('/create/list', controller.create.list);
router.get('/create/getProjectList', controller.create.getProjectList);
router.post('/create/addProject', controller.create.addProject);
router.get('/create/favorite', controller.create.favorite);
router.get('/create/deleteItem', controller.create.deleteItem);
router.get('/create/editItem', controller.create.editItem);
router.get('/create/openEditor', controller.create.openEditor);
router.get('/create/checkHasProject', controller.create.checkHasProject);

module.exports = router;