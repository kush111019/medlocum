const express = require('express');
const jobRequestController = require('../../../controllers/v1/webApp/job.request.controller');
const router = express.Router();
const validate = require('../../../middlewares/validate');
const jobRequestValidation = require('../../../validations/v1/webApp/jobRequest.validation');

router.post('/create-jobRequest',validate(jobRequestValidation.createJobRequest),jobRequestController.createJobRequest);

router.patch('/update-jobRequest/:jobRequestId',validate(jobRequestValidation.updateJobRequest),jobRequestController.updateJobRequest);

router.delete('/delete-jobRequest/:jobRequestId1',validate(jobRequestValidation.deleteJobRequest),jobRequestController.deleteJobRequest);


module.exports=router;

