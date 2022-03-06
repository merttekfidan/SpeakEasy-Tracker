const moment = require('moment')
const StatusLog = require('./../models/statusLogModel')
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');


exports.getAllLogs = catchAsync(async (req, res, next)=>{
    const log = await StatusLog.find()
    res.status(200).json({
            status:'success',
            data:{
                items:log
            }
        })
})
// Gets last active log
const getLastActiveLog = catchAsync(async() => {
    const today = moment().startOf('day')
    const lastActivelog = await StatusLog.find({
        issuedDate: {
            $gte: today.toDate(),
            $lte: moment(today).endOf('day').toDate()
        }
        })
        .sort({ issuedDate: -1 })
        .limit(1)
    if(lastActivelog){
        return lastActiveLog === null ? lastActivelog : false
    }else{
        return false
    }
});

exports.startATask = catchAsync(async (req, res, next)=>{
    if(getLastActiveLog){
        return next(new AppError('There is active task. Finish it first',400))
    }
    const log = await StatusLog.create({
        user_id:1,
        description:req.body.description,
        issuedDate:Date.now(),
        issuedBy:'user'
    })
    res.status(200).json({
            status:'success',
            data:{
                items:log,
            }
    })
})

exports.endTask = catchAsync(async (req, res, next)=>{
    const lastActive = await getLastActiveLog()
    console.log(lastActive)
    const log = await StatusLog.findByIdAndUpdate(req.body._id, {endDate:Date.now()}, {
        runValidators: true,
        new: true,
      })
    res.status(200).json({
        status:'success',
        data:{
            items:log,
        }
    })
})