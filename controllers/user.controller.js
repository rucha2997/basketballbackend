const { ValidationError } = require("yup");
const { registerValidator } = require("../validators/user.validators");
const formErrorsResponse = require("../responses/formerrors.response");
const { userModel } = require("../database/init");
const {createResponse} = require("../responses/single.response");
const bcrypt = require('bcrypt');

const register = async (req,res) =>{
    try{
        const userData = await registerValidator.validate(req.body,{abortEarly:false});
        userData.password= await bcrypt.hash(userData.password,12);
        const user = await userModel.create(userData)
        const userObj =user.toJSON();
        delete userObj.password;
        res.status(201).json(createResponse("user","create",userObj))
    }
    catch(e){
        if (e instanceof ValidationError){
            res.status(400).json(formErrorsResponse(e));
            return;
        }
        throw e;
    }
};

module.exports = {register};