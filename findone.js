var mongoose = require('mongoose');

require('./app.js');

var Book = mongoose.model('Book');
Book.findOne({author:'jim'},function(err,doc){
	if(err){
		console.log('err:',err);return;
	}
	doc.author = 'Jame';
	doc.save();
	console.log("result:",doc);
})
