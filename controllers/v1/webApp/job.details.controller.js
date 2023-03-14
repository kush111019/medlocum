const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const jobService = require('../../../services/v1/webApp/job.service');
const userService= require('../../../services/v1/webApp/user.service');
const utility = require('../../../utils/helpers');


const createJobDetails = catchAsync(async (req, res) => {
     

    const {clientId,status,title,subject,description,categoryId,type,cmUsed,location,startDate,endDate,startTime,endTime,salaryType,eirCode,travelDistance,createdAt,updatedAt}=req.body;


    const body=req.body;

    
    const client=await userService.getUserById(clientId);


    if(!client) return res.status(httpStatus.NO_CONTENT).send();


    const jobCategory=await jobService.jobCategoryExists(categoryId);


    if(!jobCategory) return res.status(httpStatus.NO_CONTENT).send();


    const jobDetailsSaved=await jobService.saveJobDetails(body);
    

    res.sendJSONResponse({
        code: httpStatus.OK,
        status: true,
        message: utility.getWebAppMessages('authMessage.signupSuccessfully'),
        data:jobDetailsSaved
      });

    //res.status(httpStatus.CREATED).send({ jobDetailsSaved });



});

const updateJobDetails= catchAsync(async(req,res) => {
 

    const {clientId,status,title,subject,description,categoryId,type,cmUsed,location,startDate,endDate,startTime,endTime,salaryType,eirCode,travelDistance,createdAt,updatedAt}=req.body;
    

    const body=req.body;

    const objectIdOfJobDetails=req.params.jobDetailsObjectId;

    const client=await userService.getUserById(clientId);

    if(!client) return res.status(httpStatus.NO_CONTENT).send();

    const jobCategory=await jobService.jobCategoryExists(categoryId);

    if(!jobCategory) return res.status(httpStatus.NO_CONTENT).send();

    const updatedJobDetails=await jobService.updateJobDetails(objectIdOfJobDetails,req.body)

    res.sendJSONResponse({
        code: httpStatus.OK,
        status: true,
        message: utility.getWebAppMessages('authMessage.signupSuccessfully'),
        data:updatedJobDetails
      });


    //res.status(httpStatus.CREATED).send({ updatedJobDetails });


})


const deleteJobDetails= catchAsync(async(req,res)=>{


const deletedJobDetails=await jobService.deleteJobDetails(req.params.jobDetailsObjectId);


res.sendJSONResponse({
    code: httpStatus.OK,
    status: true,
    message: utility.getWebAppMessages('authMessage.signupSuccessfully'),
    data:deletedJobDetails
  });

//res.send(deletedJobDetails);

})
  
module.exports={createJobDetails,updateJobDetails,deleteJobDetails};