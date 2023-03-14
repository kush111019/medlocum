const Joi = require('joi');
const { password, objectId } = require('./custom.validation');


const createJobDetails = {
    body: Joi.object().keys({
      clientId: Joi.string().required().custom(objectId),
      status: Joi.string().required().valid('open', 'closed','canceled'),
      subject: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      categoryId: Joi.string().required().custom(objectId),
      type: Joi.string().required(),
      crmUsed: Joi.string().required(),
      location: Joi.string().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
      startTime: Joi.string().required(),
      endTime: Joi.string().required(),
      salaryType: Joi.string().required(),
      salaryRange: Joi.string().required(),
      eirCode: Joi.string().required(),
      salaryRange: Joi.string().required(),
      travelDistance: Joi.string().required(),
    })
  };


const updateJobDetails = {
    params: Joi.object().keys({
        jobDetailsObjectId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
      .keys({
        clientId: Joi.string().custom(objectId),
        status: Joi.string().valid('open', 'closed','canceled'),
        subject: Joi.string(),
        title: Joi.string(),
        description: Joi.string(),
        categoryId: Joi.string().custom(objectId),
        type: Joi.string(),
        crmUsed: Joi.string(),
        location: Joi.string(),
        startDate: Joi.date(),
        endDate: Joi.date(),
        startTime: Joi.string(),
        endTime: Joi.string(),
        salaryType: Joi.string(),
        salaryRange: Joi.string(),
        eirCode: Joi.string(),
        salaryRange: Joi.string(),
        travelDistance: Joi.string(),
      }),
  };
  
  const deleteJobDetails = {
    params: Joi.object().keys({
        jobDetailsObjectId: Joi.string().custom(objectId),
    }),
  };
  
module.exports={createJobDetails,updateJobDetails,deleteJobDetails};