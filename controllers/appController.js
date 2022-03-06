const catchAsync = require('./../utils/catchAsync');


exports.getAllLogs = catchAsync(async (req, res, next)=>{
    res.status(200).json({
            status:'success',
            data:{
                items:'Data.....'
            }
        })
})