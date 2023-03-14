const httpStatus = require('http-status');
const jobCategory = require('../../../models/jobCategory.model');
const jobDetails=require('../../../models/jobDetail.model');
const jobRequest=require('../../../models/jobRequest.model');
const ApiError = require('../../../utils/ApiError');
/**
 * jobCategoryExists
 * @param {ObjectId} categoryId
 * @returns {Promise} jobCategory
 * 
 */



/**
 * saveJobDetails
 * @param {} jobObject
 * @returns {Promise} jobCategorySaved
 * 
 */

const jobCategoryExists= async(categoryId)=>{
  
 const jobCategory1=await jobCategory.findById({_id:categoryId});
 
 if(!jobCategory1){
     throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
 }
 else
 return jobCategory1;
 }


const saveJobDetails= async(jobObject)=>{

 let startDate1=new Date(jobObject.startDate);

 let endDate1=new Date(jobObject.endDate);
 
 let status=jobObject.status;

 if(['open', 'closed', 'canceled'].indexOf(status)==-1) throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect status');

 jobObject.startDate=startDate1;
 jobObject.endDate=endDate1;
 

 const jobDetailsSaved=await jobDetails.create(jobObject);

 if(!jobDetailsSaved) throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect objectId');

 return jobDetailsSaved;


}

const getJobDetailsById= async(objectId1)=> {
    
    const jobDetailsExists= await jobDetails.findById({_id:objectId1});

    if(!jobDetailsExists) throw new ApiError(httpStatus.NOT_FOUND, 'Not found');

    return jobDetailsExists;

}


const updateJobDetails=async(objectId,jobObject) => {

const jobDetails1=await getJobDetailsById(objectId);

if (!jobDetails1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'jobDetails not found');
  } 
  Object.assign(jobDetails1, jobObject);
  await jobDetails1.save();
  return jobDetails1;

}


const deleteJobDetails=async(objectId)=>{
  
const jobDetailsExists = await getJobDetailsById(objectId);

if (!jobDetails) {
    throw new ApiError(httpStatus.NOT_FOUND, 'jobDetails not found');
  }

  await jobDetailsExists.remove();
  return jobDetailsExists;

}

const createJobCategory=async(body)=>{

const createdJobCategory=await jobCategory.create(body);
  
if(!createdJobCategory) throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect objectId');

 return createdJobCategory;;


}

const updateJobCategory=async(objectId,jobCategoryBody)=>{
  
   const jobCategory2= await jobCategoryExists(objectId);
   
   if (!jobCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  
  Object.assign(jobCategory2, jobCategoryBody);
  await jobCategory2.save();
  return jobCategory2;
}

const deleteJobCategory=async(objectId)=>{

 const jobCategory1=await jobCategoryExists(objectId);
  

 if (!jobCategory1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  
  await jobCategory1.remove();
  return jobCategory1;

}

const createJobRequest=async(jobRequestObject)=>{
  
  if(['pending', 'approved', 'canceled', 'rejected'].indexOf(jobRequestObject.requestStatus) ==-1)throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect status')

  const jobRequest1=await jobRequest.create(jobRequestObject);

  return jobRequest1;

}


const updateJobRequest=async(objectId,object)=>{
   
    const jobRequest1=await jobRequest.findById({_id:objectId});

    if(!jobRequest1) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

    Object.assign(jobRequest1,object);
    await jobRequest1.save();
    return jobRequest1;

}

const deleteJobRequest=async(objectId)=>{

const jobRequest1=await jobRequest.findById({_id:objectId});

if(!jobRequest1) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

await jobRequest1.remove();
return jobRequest1;

}


module.exports={jobCategoryExists,saveJobDetails,getJobDetailsById,updateJobDetails,deleteJobDetails,createJobCategory,updateJobCategory,deleteJobCategory,createJobRequest,updateJobRequest,deleteJobRequest};