var mongoose = require('mongoose');
require('./app.js');

var Book = mongoose.model('Book');

var book = new Book({
	name:'MEAN Web',
	author:"Green",
	publishTime:new Date()
});
book.author = 'jim';
book.save(function(err){
	console.log('save status:',err ? 'failed' : 'success')
})
