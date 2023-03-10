const express = require('express');

const jobCategoryController = require('../../../controllers/v1/webApp/job.category.controller');

const router = express.Router();

router.post('/create-jobCategory',jobCategoryController.createJobCategory);

router.post('/update-jobCategory/:jobCategoryId',jobCategoryController.updateJobCategory);

router.delete('/delete-jobCategory/:jobCategoryId',jobCategoryController.deleteJobCategory);

module.exports=router;
