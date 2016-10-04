/**
 * Created by gandharva.rb on 01/10/16.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

var campaignSchema = new mongoose.Schema({
    Campaign_name: {
        type: String,
        required: true
    },
    CsvFileId: String,
    VoiceFileId: String,
    UserId: {
        type: String,
        required: true
    },
    CampaignStatus: {
        type: String,
        default: "in_prgress"
    },
    TotalCalls: {
        type: Number,
        default: 0
    },
    AnsweredCalls: {
        type: Number,
        default: 0
    },
    NoResponse: {
        type: Number,
        default: 0
    },
    FailedCalls: {
        type: Number,
        default: 0
    },
    DateOfCreation: {
        type: Date,
        default: Date.now()
    },
    DateOfCampaign: {
        type: Object,
        FromDate: {
            type: Date,
            default: Date.now()
        },
        ToDate: {
            type: Date,
            default: Date.now()
        }
    }
});
module.exports = restful.model("Campaigns", campaignSchema);