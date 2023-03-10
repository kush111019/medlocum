const express = require('express');
const jobDetailsController = require('../../../controllers/v1/webApp/job.details.controller');
const router = express.Router();


router.post('/create-job-details', jobDetailsController.createJobDetails);

router.post('/update-job-details/:jobDetailsObjectId',jobDetailsController.updateJobDetails);

router.delete('/delete-job-details/:jobDetailsObjectId',jobDetailsController.deleteJobDetails);


module.exports = router
