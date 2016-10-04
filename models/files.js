/**
 * Created by gandharva.rb on 01/10/16.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

var fileSchema = new mongoose.Schema({
    file: {
        data: Buffer,
        contentType: String
    },
    fileType:String,
    userId: {
        type: String,
        required: true
    }
});
module.exports = restful.model("Files", fileSchema);