// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const recordSchema = new Schema({
   
//     violations:{
//         employee: { type: Schema.Types.ObjectId, ref: 'employee', required: true },
//         count : {type:Number},
//         detail : {type:String ,min_length : 50, required: true},
//         severity : {type:Number, default : 1, max : 5},
//         resolution : {type:Boolean},
//     },
//     attendence: {
//         missed: {type: Array , type:Date},
//         tardy: {type: Array, type:Date},
//         reason: {type: String}
//     },
//     years: {type:Date},
//     updown: {
//         promotions: {type:Number},
//         demotions: {type:Number}
//     },
//     salary: {type: Number},
// },
// {
//     timestamps : true
// })
// module.exports = mongoose.model('Record' , recordSchema);

// recordID : {},