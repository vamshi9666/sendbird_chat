import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import users from './routes/users';

let app = express();

mongoose.connect('mongodb://send_bird:test123@ds111478.mlab.com:11478/portfolio',  { useNewUrlParser: true })
const connection = mongoose.connection;

connection.on('error',(err)=>{
  console.log("\n        ----Error in connecting to Databse---- \n \n ", err);

})

connection.on('open', function(args) {
  console.log("\n        ----connection to database opened----\n \n ");
});
app.use(bodyParser.json());

app.use('/api/user', users);

const compiler = webpack(webpackConfig);

app.use(
  webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
  }),
);
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
