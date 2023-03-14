const express = require('express');

const jobCategoryController = require('../../../controllers/v1/webApp/job.category.controller');

const router = express.Router();
const validate = require('../../../middlewares/validate');
const jobCategoryValidation = require('../../../validations/v1/webApp/jobCategory.validation');

router.post('/create-jobCategory',validate(jobCategoryValidation.createJobCategory),jobCategoryController.createJobCategory);

router.patch('/update-jobCategory/:jobCategoryId',validate(jobCategoryValidation.updateJobCategory),jobCategoryController.updateJobCategory);

router.delete('/delete-jobCategory/:jobCategoryId',validate(jobCategoryValidation.deleteJobCategory),jobCategoryController.deleteJobCategory);

module.exports=router;
