const express = require('express');
const app = express();
const db = require('./config/mongoose');
const port = process.env.PORT || 8000;

app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes/index'));

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	}
	console.log(`express running on port ${port}`);
});
