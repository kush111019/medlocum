const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const {jobService} = require('../../../services/v1/webApp');


const createJobCategory = catchAsync(async (req, res) => {
   
   const {name}=req.body;

   let body=req.body;

   let createdAt=new Date();

   let updatedAt=new Date();

   body.createdAt=createdAt;

   body.updatedAt=updatedAt;

   console.log("hello world1");

   const newJobCategory=await jobService.createJobCategory(body);

   console.log("hello world2");

   res.status(httpStatus.CREATED).send({ newJobCategory });

})

const updateJobCategory=catchAsync(async(req,res) =>{

   const {name,createdAt,updatedAt}=req.body;

   let body=req.body;
   
   let objectId=req.params.jobCategoryId;

   const jobCategory=await jobService.updateJobCategory(objectId,body);

   res.status(httpStatus.CREATED).send({jobCategory });

})

const deleteJobCategory=catchAsync(async(req,res) =>{

const jobCategory=await jobService.deleteJobCategory(req.params.jobCategoryId);

res.send({jobCategory});

})

module.exports={createJobCategory,updateJobCategory,deleteJobCategory};