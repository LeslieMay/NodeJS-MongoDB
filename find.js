var mongoose = require('mongoose');

require('./app.js');

var Book = mongoose.model('Book');

Book.find({},function(err,docs){
	if(err){
		console.log('err:',err);
		return;
	}
	console.log('result:',docs);
})
