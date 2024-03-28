const yup = require('yup');

const addGameValidator = yup.object({
    hometeam:yup.string().required(),
    awayteam: yup.string().required(),
    gametime:yup.number().required().typeError('Invalid Timestamp').test("future_timestamp","Timestamp must be in the future",(value)=>{
        return Date.now() < +value;
    }),
})

const updateScoreValidator = yup.object({
    awayteamScore: yup
      .number()
      .typeError("Invalid Number")
      .required()
      .min(0)
      .max(200),
    hometeamScore: yup
      .number()
      .typeError("Invalid Number")
      .required()
      .min(0)
      .max(200),
    quarter: yup.number().typeError("Invalid Number").required().min(1).max(4),
    minutes: yup.number().typeError("Invalid Number").required().min(0).max(15),
    seconds: yup.number().typeError("Invalid Number").required().min(0).max(60),
  });
  
  module.exports = { addGameValidator, updateScoreValidator };