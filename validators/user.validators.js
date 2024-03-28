const yup = require('yup');
const { userModel } = require('../database/init');

const registerValidator = yup.object({
    email:yup.string().required().email().min(5).test('unique-email',"Email is already taken.",async(value)=>{
        const user = await userModel.findOne({where: {email: value } });

        return user ===null||user===undefined;
    }),
    password: yup.string().required().min(6).max(30),
});

const loginValidator = yup.object({
    email:yup.string().required(),
    password: yup.string().required(),
})

module.exports ={registerValidator,loginValidator};