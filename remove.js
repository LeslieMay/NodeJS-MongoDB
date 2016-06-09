var mongoose = require('mongoose');
require('./app.js');
var Book = mongoose.model('Book');
Book.findOne({author:'jim'},function(err,doc){
	if(err){
		console.log("findOne err:",err);
		return;
	}
	if(doc){
		doc.remove();
	}
})
