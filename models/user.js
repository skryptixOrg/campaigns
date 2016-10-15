/**
 * Created by gandharva.rb on 01/10/16.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

var campaignSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_email: String,
    user_number: String,
    DateOfJoin: {
        type: Date,
        default: Date.now()
    },
    user_password: {
        type: String,
        required: true
    },
    user_company: {
        type: String
    },
    login_attempts: {
        type: Number,
        default: 0
    },
    state: {
        type:String,
        default: 'INACTIVE'
    }
});
module.exports = restful.model("Users", campaignSchema);