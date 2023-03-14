const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createJobCategory = {
    body: Joi.object().keys({
      name: Joi.string().required(),
      createdAt: Joi.date().required(),
      updatedAt: Joi.date().required(),
    })
  };

  const updateJobCategory = {
    params: Joi.object().keys({
      jobCategoryId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
      .keys({
      name: Joi.string(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
      }),
  };

  const deleteJobCategory = {
    params: Joi.object().keys({
      jobCategoryId: Joi.string().custom(objectId),
    }),
  };

module.exports={createJobCategory,updateJobCategory,deleteJobCategory,deleteJobCategory};