// ALC/model/user_model.js
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({

    name : {
        type: String,
        default:""
    },

    reg_number : {
        type: String,
        default: ""
    },

    department : {
        type: String,
        default: ""
    },

    course: {  
        type: String,
        default:""
    },

    no_of_years : {
        type: Number,
        default: 0
    },
    

    

    // date : {
    //     type: "Date",
    //     default: "Date.now"
    // }

});
module.exports = mongoose.model('user_model', UserSchema)