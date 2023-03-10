const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const {userService,jobService} = require('../../../services/v1/webApp');


const createJobRequest = catchAsync(async (req, res) => {


const {jobId,clientId,candidateId,requestStatus,createdAt,updatedA}=req.body;


let body=req.body;


const jobDetails=await jobService.getJobDetailsById(jobId);


if(!jobDetails) return res.status(httpStatus.NO_CONTENT).send();


const client=await userService.getUserById(clientId);


if(!client) return res.status(httpStatus.NO_CONTENT).send();


const candidate=await userService.getUserById(candidateId);


if(!candidate) return res.status(httpStatus.NO_CONTENT).send();


const createdJobRequest=await jobService.createJobRequest(body);


res.status(httpStatus.CREATED).send({ newJobCategory });


})

const updateJobRequest=catchAsync(async (req,res)=>{


const jobRequestId=req.params.jobRequestId;


const {jobId,clientId,candidateId,requestStatus,createdAt,updatedAt}=req.body;


const jobDetails=await jobService.getJobDetailsById(jobId);


if(!jobDetails) return res.status(httpStatus.NO_CONTENT).send();


const client=await userService.getUserById(clientId);


if(!client) return res.status(httpStatus.NO_CONTENT).send();


const jobRequest=await jobService.updateJobRequest(jobRequestId);


res.status(httpStatus.CREATED).send({jobRequest});


})

const deleteJobRequest=catchAsync(async(req,res)=>{
    

const jobRequestId=req.params.jobRequestId;


const jobRequest=await jobService.deleteJobRequest(jobRequestId);


res.send({jobRequest});


})

module.exports={createJobRequest,updateJobRequest,deleteJobRequest};
