const express = require('express');
const jobDetailsController = require('../../../controllers/v1/webApp/job.details.controller');
const router = express.Router();
const validate = require('../../../middlewares/validate');
const jobDetailsValidation = require('../../../validations/v1/webApp/jobDetails.validation');

router.post('/create-job-details',validate(jobDetailsValidation.createJobDetails), jobDetailsController.createJobDetails);

router.patch('/update-job-details/:jobDetailsObjectId',validate(jobDetailsValidation.updateJobDetails),jobDetailsController.updateJobDetails);

router.delete('/delete-job-details/:jobDetailsObjectId',validate(jobDetailsValidation.deleteJobDetails),jobDetailsController.deleteJobDetails);


module.exports = router
