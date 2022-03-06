const mongoose = require('mongoose')
const statusLogSchema = mongoose.Schema({
    user_id:{
        type:Number,
    },
    description:{
        type:String,
        required:[true,'A status needs a description.']
    },
    issuedDate:{
        type:Date,
        default: Date.now()
    },
    endDate:{
        type:Date,
        default:null
    },
    issuedBy:{
        type:String,
        enum:['system','user']
    }

})

const StatusLog = mongoose.model('StatusLog', statusLogSchema);
module.exports = StatusLog;