const mongoose = require('mongoose');
//connecting mongoose with database
//I stored MONGODB_URI in my system veriable for security reason. veriable name MONGODB_URI followed by your mongo atlas link
//for local use you can write this code
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/csvUploader');
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('db connected');
	})
	.catch((err) => {
		console.log(err);
	});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to Mongodb'));

db.once('open', function () {
	console.log('connected to Mongodb');
});

module.exports = db;
