var mongoose = require('mongoose');
require('./app.js');
var Book = mongoose.model('Book');
var cond = {
	$and:[
		{author:'jim'},
		{author:'Jame'}
	]
};
Book.find(cond,function(err,docs){
	if(err){
		console.log("finde by cond err:",err);
		return;
	}
	console.log("find result:",docs);
});
