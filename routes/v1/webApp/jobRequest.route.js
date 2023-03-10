const express = require('express');
const jobRequestController = require('../../../controllers/v1/webApp/job.request.controller');
const router = express.Router();

router.post('/create-jobRequest',jobRequestController.createJobRequest);

router.post('/update-jobRequest',jobRequestController.updateJobRequest);

router.delete('/delete-jobRequest',jobRequestController.deleteJobRequest);


module.exports=router;

