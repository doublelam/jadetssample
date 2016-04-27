var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	id: Number,
	name:String,
	passowrd:String
});
db.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});

exports.modelDb=db.model('teste',userSchema);