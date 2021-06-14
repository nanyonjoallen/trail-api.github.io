const Joi = require('joi');
const mongoose = require('mongoose');
const schema = Joi.object({
    username: Joi.string().required().min(4),
    password:Joi.string().alphanum().required().min(6)
})
const UserSchema = new mongoose.Schema({
    username: String,
    password:String
})

schema.validate(UserSchema)

module.exports = UserSchema;