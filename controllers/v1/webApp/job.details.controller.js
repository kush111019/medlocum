const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const {userService,jobService} = require('../../../services/v1/webApp');


const createJobDetails = catchAsync(async (req, res) => {
     

    const {clientId,status,title,subject,description,categoryId,type,cmUsed,location,startDate,endDate,startTime,endTime,salaryType,eirCode,travelDistance,createdAt,updatedAt}=req.body;


    const body=req.body;

    
    const client=await userService.getUserById(clientId);


    if(!client) return res.status(httpStatus.NO_CONTENT).send();


    const jobCategory=await jobService.getJobCategory(categoryId);


    if(!jobCategory) return res.status(httpStatus.NO_CONTENT).send();


    const jobDetailsSaved=await jobService.saveJobDetails(body);


    res.status(httpStatus.CREATED).send({ jobDetailsSaved });



});

const updateJobDetails= catchAsync(async(req,res) => {
 

    const {clientId,status,title,subject,description,categoryId,type,cmUsed,location,startDate,endDate,startTime,endTime,salaryType,eirCode,travelDistance,createdAt,updatedAt}=req.body;
    

    const body=req.body;

    const objectIdOfJobDetails=req.params.jobDetailsObjectId;

    const client=await userService.getUserById(clientId);

    if(!client) return res.status(httpStatus.NO_CONTENT).send();

    const jobCategory=await jobService.getJobCategory(categoryId);

    if(!jobCategory) return res.status(httpStatus.NO_CONTENT).send();

    const updatedJobDetails=await jobService.updateJobDetails(objectIdOfJobDetails,body)

    res.status(httpStatus.CREATED).send({ updatedJobDetails });


})


const deleteJobDetails= catchAsync(async(req,res)=>{


const deletedJobDetails=await jobService.deleteJobDetails(req.params.jobDetailsObjectId);


res.send(deletedJobDetails);

})
  
module.exports={createJobDetails,updateJobDetails,deleteJobDetails};