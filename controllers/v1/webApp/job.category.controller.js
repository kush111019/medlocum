const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const jobService = require('../../../services/v1/webApp/job.service');
const utility = require('../../../utils/helpers');


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

   res.sendJSONResponse({
      code: httpStatus.OK,
      status: true,
      message: utility.getWebAppMessages('authMessage.signupSuccessfully'),
      data:newJobCategory
    });

   //res.status(httpStatus.CREATED).send({ newJobCategory });

})

const updateJobCategory=catchAsync(async(req,res) =>{

   const {name,createdAt,updatedAt}=req.body;

   let body=req.body;
   
   let objectId1=req.params.jobCategoryId;

   const jobCategory=await jobService.updateJobCategory(objectId1,body);

   res.sendJSONResponse({
      code: httpStatus.OK,
      status: true,
      message: utility.getWebAppMessages('authMessage.signupSuccessfully'),
      data:jobCategory
    });

   //res.status(httpStatus.CREATED).send({jobCategory });

})

const deleteJobCategory=catchAsync(async(req,res) =>{

const jobCategory=await jobService.deleteJobCategory(req.params.jobCategoryId);

res.sendJSONResponse({
   code: httpStatus.OK,
   status: true,
   message: utility.getWebAppMessages('authMessage.signupSuccessfully'),
   data:jobCategory
 });

//res.send({jobCategory});

})

module.exports={createJobCategory,updateJobCategory,deleteJobCategory};