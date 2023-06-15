require('dotenv').config();
const { DEVURL, PORT } = process.env;
const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(express.static('views/static'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./Routes/index'));
app.use('/post', require('./Routes/post'));
app.use('/comment', require('./Routes/comment'));

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log('서버가 구동되었습니다.');
  console.log(DEVURL);
});
