const httpStatus = require('http-status');
const {jobCategory,jobDetails,jobRequest} = require('../../../models');
const ApiError = require('../../../utils/ApiError');
/**
 * jobCategoryExists
 * @param {ObjectId} categoryId
 * @returns {Promise} jobCategory
 * 
 */

const jobCategoryExists= async(categoryId)=>{
 
const jobCategory=await jobCategory.findById({_id:categoryId});

if(!jobCategory){
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
}
else
return jobCategory;
}

/**
 * saveJobDetails
 * @param {} jobObject
 * @returns {Promise} jobCategorySaved
 * 
 */

const saveJobDetails= async(jobObject)=>{
   
 const jobDetailsSaved=await jobDetails.insert(jobObject);

 if(!jobDetailsSaved) throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect objectId');

 return jobDetailsSaved;


}

const getJobDetailsById= async(objectId)=> {
 
    const jobDetailsExists= await jobDetails.findById({_id:objectId});

    if(!jobDetailsExists) throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect objectId');

    return jobDetailsExists;

}


const updateJobDetails=async(objectId,jobObject) => {

const jobDetails=await getJobDetailsById(objectId);

if (!jobDetails) {
    throw new ApiError(httpStatus.NOT_FOUND, 'jobDetails not found');
  }
 
  Object.assign(jobDetails, jobObject);
  await jobDetails.save();
  return jobDetails;

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
   console.log("run service1")
const createdJobCategory=await jobCategory.insert(body);
   console.log("run service2");
if(!createdJobCategory) throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect objectId');
console.log("run service3");
 return createdJobCategory;;


}

const updateJobCategory=async(objectId,jobCategoryBody)=>{

   const jobCategory= await jobCategoryExists(objectId);

   if (!jobCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  
  Object.assign(jobCategory, jobCategoryObject);
  await jobCategory.save();
  return jobCategory;
}

const deleteJobCategory=async(objectId)=>{

 const jobCategory=await jobCategoryExists(objectId);
  

 if (!jobCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  
  await jobCategory.remove();
  return jobCategory;

}

const createJobRequest=async(jobRequestObject)=>{

  Object.assign(jobRequest, jobRequestObject);
  await jobRequest.save();
  return jobRequest;

}


const updateJobRequest=async(objectId,object)=>{
   
    const jobRequest=await jobRequest.findById({_id:objectId});

    if(!jobRequest) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

    Object.assign(jobRequest,object);
    await jobRequest.save();
    return jobRequest;

}

const deleteJobRequest=async(objectId)=>{

const jobRequest=await jobRequest.findById({_id:objectId});

if(!jobRequest) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

await jobRequest.remove();
return jobRequest;

}
module.exports={jobCategoryExists,saveJobDetails,getJobDetailsById,updateJobDetails,deleteJobDetails,createJobCategory,updateJobCategory,deleteJobCategory,createJobRequest,updateJobRequest,deleteJobRequest};